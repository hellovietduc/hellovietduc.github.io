---
title: "[Node.js] Khi require một file n lần, thì đoạn code bên trong file đó chạy bao nhiêu lần?"
tags: [jest, node.js]
---

Hôm nay cuối sprint, đang hoàn thành nốt cái coverage test cho đúng hạn thì mình gặp phải tình huống như thế này.

<!-- truncate -->

## The problem

Mình có file `axon.js` export một hàm `connect()`:

```javascript
const axon = require('axon');
const sock = axon.socket('push');

module.exports.connect = addr => new Promise(resolve => {
    sock.connect(addr, err => {
        if (err) return resolve(false);
        resolve(true);
    });
});
```

Hàm này được dùng ở file `index.js`:

```javascript
const axon = require('./axon');

module.exports.doSomething = async () => {
    const connected = await axon.connect('real_address');
    if (!connected) return false;
    // do something else
    // ...
    return true;
}
```

Để test case khi chạy không phải connect ra ngoài thì mình sẽ mock. Ý tưởng lúc đầu là mock thằng `axon.socket()`. Đoạn test case lúc đó của mình nhìn như sau:

```javascript
test('doSomething() succeeds', async done => {
    axon.socket = jest.fn().mockImplementationOnce(() => {
        return {
            connect: (addr, cb) => {
                cb();
            }
        }
    });

    const index = require('./index');
    const success = await index.doSomething();
    expect(success).toBe(true);
    done();
});
```

Chạy `jest --coverage` lên thấy test case pass xanh lè, cover luôn được dòng `resolve(true);` trong `axon.js` ngon lành. Đang thắng, mình copy paste làm cái test case thứ hai cho trường hợp connect fail.

```javascript
test('doSomething() fails', async done => {
    axon.socket = jest.fn().mockImplementationOnce(() => {
        return {
            connect: (addr, cb) => {
                cb(new Error());
            }
        }
    });

    const index = require('./index');
    const success = await index.doSomething();
    expect(success).toBe(false);
    done();
});
```

Ơ, **"1 failed"**, Jest said. Sai làm sao được nhỉ? Mình đã `mockReset()` trong `beforeEach()` rồi, lại còn dùng `mockImplementationOnce()` nữa. Thử debug thì thấy `connected` là `false` rõ ràng, test case pass bình thường. Nhưng cứ chạy `jest --coverage` thì không pass. Thử xóa `node_modules` rồi `npm install` lại vẫn vậy. Kì lạ!

Sau một hồi loay hoay cầu cứu bác Gu gồ, cuối cùng bác phán cho một câu như này: ***"Modules are cached after the first time they are loaded."***

## Introduction to how `require` in Node.js works

`require` là một built-in function của Node.js, nhận vào một biến string là path dẫn đến file cần require và trả về một object, một hàm hoặc bất kì cái gì khác mà file đó export ra. Vì cú pháp sử dụng đơn giản, lại xuất hiện ở mọi nơi trong project nên đôi khi chúng ta không quan tâm `require` hoạt động như thế nào.

Khi được gọi, `require` sẽ thực thi lần lượt theo các bước sau:

1. Tìm absolute path của file đang được require, nếu không truyền file extension thì mặc định tìm với extension `.js`
2. Xác định content type của file đó, ngoài `.js` thì Node.js có thể require cả file `.json` và `.node` nữa
3. Kiểm tra xem file này đã được cache chưa, nếu rồi thì trả về kết quả luôn, nếu chưa thì đi tiếp bước 4
4. Khởi tạo một private scope cho file, vì vậy nên 2 biến "global" trong 2 file JS khác nhau có thể đặt trùng tên được
5. Load code vào bộ nhớ
6. Cache lại file này

Đến đây thì dễ dàng để nhận ra vấn đề rồi. File `axon.js` được require 2 lần khi chạy `jest --coverage`, nhưng khi debug riêng 1 test case thì nó chỉ được require 1 lần. Hàm `axon.socket()` chỉ thực thi một lần và được cache lại. Chính vì vậy nên test case fail mới fail :)) Nếu mình đổi thứ tự cho test case succeed xuống dưới thì nó mới là thằng bị fail.

Nếu vậy thì làm sao giờ? Thử tách test case ra 2 hàm `describe()` xem sao? Vẫn fail. Thử tách hẳn ra 2 file, mỗi file 1 test case. Pass! Nhưng mà như này tù quá, không thể cứ mỗi test case để 1 file được.

## `jest.doMock()` to the rescue!

Hàm này sẽ mock cả package `axon`, kết hợp với `jest.resetModules()` thì mỗi lần gặp `require('axon')` trong code Jest sẽ dùng mock implementation của mình chứ không phải đọc từ file, vì vậy sẽ không còn cache trong require nữa.

```javascript
beforeEach(() => {
    jest.resetModules();
});

test('doSomething() succeeds', async done => {
    jest.doMock('axon', () => {
        return {
            socket: () => {
                return {
                    connect: (addr, cb) => {
                        cb();
                    }
                }
            }
        }
    });

    const index = require('./index');
    const connected = await index.doSomething();
    expect(connected).toBe(true);
    done();
});

test('doSomething() fails', async done => {
    jest.doMock('axon', () => {
        return {
            socket: () => {
                return {
                    connect: (addr, cb) => {
                        cb(new Error());
                    }
                }
            }
        }
    });

    const index = require('./index');
    const connected = await index.doSomething();
    expect(connected).toBe(true);
    done();
});
```

Kết quả 2 test case đều pass ngon lành, coverage 100% và mình có thể yên tâm đi về viết bài blog này. 🎉

Hi vọng bài viết có ích!

*Tham khảo từ:*

- _[Modules \| Node.js v12.16.1 Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/modules.html#modules_require_id)_

- _[Requiring modules in Node.js: Everything you need to know](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/)_

- _[javascript - Requiring same module in multiple files - Stack Overflow](https://stackoverflow.com/a/30038787/8943850)_
