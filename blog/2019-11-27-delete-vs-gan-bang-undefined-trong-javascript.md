---
title: delete vs gán bằng undefined trong JavaScript
tags: [javascript]
image: /thumbs/2019-11-27-delete-vs-gan-bang-undefined-trong-javascript.png
---

Đã bao giờ bạn xóa một property khỏi object trong JavaScript chưa? Bạn sử dụng cách nào? Bạn có muốn biết sự khác biệt giữa những cách đó? Bài viết này sẽ giúp bạn giải thích những thắc mắc trên.

<!-- truncate -->

Hôm nay đang code thì mình gặp trường hợp phải xoá một property trong object. Thoạt nhìn tưởng đơn giản mà lại chứa đựng những kiến thức không ngờ. 😱

Như các bạn đã biết, có 2 cách để "xoá" một property khỏi object trong JavaScript:
1. Dùng `delete` operator
    ```javascript
    delete foo.bar
    ```

2. Gán property cần xoá bằng `undefined`
    ```javascript
    foo.bar = undefined
    ```

Sau một hồi Google thần chưởng, mình có thể tóm tắt lại những điểm khác biệt giữa 2 cách trên.

## 1. Gán property bằng `undefined` không hoàn toàn xoá property đó

Điều đầu tiên bạn nên biết là việc gán `foo.bar` bằng `undefined` chỉ đơn giản là cho property đó có giá trị là `undefined`. Có nghĩa là khi bạn sử dụng hàm `hasOwnProperty()` hoặc lặp object trong vòng lặp `for in` thì property vẫn còn tồn tại.

```javascript
foo.hasOwnProperty('bar') // returns true

for (const key in foo) {
    if (key === 'bar') {
        console.log('I am still alive') // log `I am still a live`
    }
}
```

Nếu dùng `delete` operator thì property sẽ bị xoá hoàn toàn, và kết quả trong đoạn code trên sẽ bị đảo ngược.

Lí do là vì `delete` operator làm thay đổi [hidden class](https://thefullsnack.com/posts/javascript-v8-notes.html#hidden-class), tương đương với việc property `bar` chưa bao giờ được khai báo. Điều này không xảy ra khi gán `foo.bar` bằng `undefined`, vì thao tác này chỉ gán lại giá trị của property `bar`. Vì vậy nếu bạn muốn check trong object có tồn tại property nào đó không thì nên sử dụng hàm `hasOwnProperty()` hơn là một câu check đơn giản:

```javascript
if (foo.bar === undefined) { }
```

Các bạn thử tìm hiểu sự khác biệt giữa _undefined_ và _not defined_ trong JavaScript nữa nhé, khá thú vị đấy! 😉

## 2. Nếu object có prototype chain thì sao?

Mình có một ví dụ như sau:

```javascript
const origin = {
    x: 1
}

const extended = Object.create(origin)
extended.x = 2

delete extended.x
console.log(extended.x) // ???
```

Các bạn thử đoán xem đoạn code trên sẽ log ra cái gì?

Nếu bạn nghĩ kết quả là `undefined` thì xin chia buồn, hôm nay bạn tạch lô =))

Ở đây chúng ta có object `extended` có prototype là object `origin`. Sau khi gọi `delete` thì mỗi lần truy cập lại `extended.x` JavaScript engine sẽ look up từ prototype chain của `extended` và tìm thấy property `x` của `origin`. Kết quả trả về console là `1`.

OK đã rõ, vậy điều gì sẽ xảy ra khi thay 2 dòng cuối của đoạn code trên thành như sau:

```javascript
extended.x = undefined
console.log(extended.x) // ???
```

Lúc này kết quả log ra sẽ là `undefined`. Vì property `x` vẫn tồn tại trong `extended` với giá trị bằng `undefined` nên sẽ không xảy ra việc look up từ prototype chain.

Túm lại là khi bạn thực hiện "xoá" một property khỏi object, nếu không chắc chắn rằng object đó có prototype chain hay không và các object nó thừa hưởng prototype có chứa property cần xoá không, thì bạn nên gán nó bằng `undefined` thay vì dùng `delete` operator.

## 3. "Tôi có một con máy Linux với CPU 0.8GHz và 256MB RAM, tôi quan tâm tới performance!"

Như đã đề cập ở phần 1, việc `delete` một property sẽ làm thay đổi hidden class, đồng nghĩa với performance bị ảnh hưởng. Bạn nên tránh sử dụng `delete` operator quá nhiều, đặc biệt ở trong vòng lặp. Tuy nhiên không có nghĩa là bạn không bao giờ nên dùng operator này. Việc optimize code ở mức JavaScript engine sẽ không đáng để đánh đổi nếu nó làm cho code của bạn đọc như văn tế.

Bài viết này đã giúp bạn hiểu được sự khác biệt giữa 2 cách xóa property khỏi object trong JavaScript. Hi vọng nó sẽ giúp bạn lên level để đi cà khịa với đồng nghiệp. 😎

*Tham khảo từ:*

- _[javascript - delete a.x vs a.x = undefined - Stack Overflow](https://stackoverflow.com/a/14967568/8943850)_

- _[Vài ghi chép về V8 và Garbage Collection \| Huy's Blog](https://thefullsnack.com/posts/javascript-v8-notes.html#hidden-class)_
