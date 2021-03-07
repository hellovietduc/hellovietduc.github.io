---
title: Conditional không cần if else hoặc switch trong JavaScript
tags: [javascript]
---

Một bài note nhanh và ngắn chia sẻ về sự hay ho của JavaScript. Mới đây mình gặp một tình huống nho nhỏ như sau.

<!-- truncate -->

Có một entity `User` với 2 trường: `status` và `type`. Mỗi trường lần lượt có những giá trị sau:
- `status`: `['NO_ACCESS', 'PENDING_SUBSCRIBE', 'SUBSCRIBED', 'PENDING_CANCEL']`
- `type`: `['NO_ACCESS', 'DELAYED', 'CLICK2REFRESH', 'REALTIME']`

Nhiệm vụ của mình là viết một API để update 2 trường trên:
- `PUT /users/:user_id`

	```json
	{
		"status": "PENDING_SUBSCRIBE",
		"type": "REALTIME"
	}
	```

Vì 2 trường này có mối liên hệ với nhau, nên sau khi vận dụng hết năng lực toán học cao cấp từ 12 năm đèn vở bonus vài năm tự đi chợ mua rau của mình, mình tính ra được có tất cả 16 trường hợp cần xử lý ở trong API trên. Không sợ kẻ thù đông, mình sắn ống tay ra trận. Sau đây là tường thuật diễn biến trận đấu.

### Round 1: `if else`

Ban đầu, mình thử code ngay với kiểu `if else` truyền thống.

```javascript
if (user.status === 'NO_ACCESS') {
    if (user.type === 'NO_ACCESS') {
        // ...
    } else if (user.type === 'DELAYED') {
        // ...
    } else if (user.type === 'CLICK2REFRESH') {
        // ...
    } else if (user.type === 'REALTIME') {
        // ...
    }
} else if (user.status === 'PENDING_SUBSCRIBE') {
    if (user.type === 'NO_ACCESS') {
        // ...
    } else if (user.type === 'DELAYED') {
        // ...
    } else if ...
} else if ...
```

Và chẳng cần phải nói, đống code trên nhìn như shit vậy. Quá rối rắm và nếu không cẩn thận thì rất dễ để viết sai tên trường hoặc giá trị so sánh. Vì vậy, mình đã chuyển sang dùng vũ khí lợi hại hơn.

### Round 2: `switch case`

```javascript
switch (user.status) {
    case 'NO_ACCESS':
        switch (user.type) {
            case 'NO_ACCESS':
                // ...
                break;
            case 'DELAYED':
                // ...
                break;
            case 'CLICK2REFRESH':
                // ...
                break;
            case 'REALTIME':
                // ...
                break;
        }
        break;
    case 'PENDING_SUBSCRIBE':
        // ...
        break;
    case 'SUBSCRIBED':
        // ...
        break;
    case 'PENDING_CANCEL':
        // ...
        break;
}
```

Tuy code đã nhìn gọn hơn, nhưng cơ bản nó vẫn không khác `if else` là mấy. Càng nhiều `status` và `type` thì đoạn code sẽ càng dài và khó đọc. Đến lúc này, mình đành phải vận nội công, tận dụng tối đa tính dynamic của JavaScript, và kết quả là...

### Round 3: Object mapping

Sử dụng giá trị của 2 trường `status` và `type`, mình tạo ra một object như sau:

```javascript
const handlerMapping = {
    NO_ACCESS: {
        NO_ACCESS: () => {
            // ...
        },
        DELAYED: () => {
            // ...
        },
        CLICK2REFRESH: () => {
            // ...
        },
        REALTIME: () => {
            // ...
        }
    },
    PENDING_SUBSCRIBE: {
        // ...
    },
    ...
}
```

Lúc này, việc gọi hàm xử lý trở nên dễ dàng hơn rất nhiều:

```javascript
// get the handler function
const handler = handlerMapping[user.status][user.type]

// execute the function
handler()
```

Cách sử dụng object mapping làm giảm bớt những keyword lặp đi lặp lại của 2 cách trên, phù hợp với những trường hợp điều kiện check dài với mỗi trường có nhiều giá trị. Dù không phải là cái gì đó quá đột phá nhưng mình cảm thấy khá hay ho và đáng để chia sẻ. Cảm ơn các bạn đã đọc hết bài này. 🤗
