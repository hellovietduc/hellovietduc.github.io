---
title: Review sách The Little Go Book
tags: [go, books]
---

Một chút review về cuốn sách dành cho Go beginner như mình.

<!--truncate-->

Review (một số chỉ là note) được viết theo thứ tự mình đọc sách, và chẳng có sự kết dính nào cả giữa các phần với nhau =))

Cá nhân mình thấy cuốn sách rất phù hợp để làm quen với các khái niệm của Go và tác giả cũng định hướng mindset luôn để mình có thể nhận ra sự khác biệt và tự tìm hiểu sâu hơn.

Một số thông tin về cuốn sách:
- Tác giả: Karl Seguin
- Số trang: 83
- Link đọc: [https://www.openmymind.net/assets/go/go.pdf](https://www.openmymind.net/assets/go/go.pdf)

# 1

**"Go is a compiled, statically typed language with a C-like syntax and garbage collection."**

Từ câu mở đầu Chương 1 trên có thể suy ra vài thứ:

- Go là ngôn ngữ biên dịch, bạn cần 1 compiler và sẽ phải build để run code
- Go là ngôn ngữ có kiểu của biến được xác định ở compile-time (ngược lại với JavaScript)
- Go có syntax kiểu giống C (chứ không phải như Assembly)
- Go có garbage collection (ơn giời :v )

Chương 1 giới thiệu ngắn gọn một số đặc điểm của Go và một số điểm khác biệt về import, khai báo biến. Đọc rất trôi và không bị choáng ngợp như những bài tutorials liệt kê tất cả các kiểu dữ liệu hoặc những bài lặp lại những cấu trúc if else, for loop mà ngôn ngữ nào cũng có.

# 2

Chương 2 giới thiệu về structure trong Go. Go không phải là ngôn ngữ OOP, không có inheritance, polymorphism hay overloading. Chỉ cần structure thôi là đủ. Structure trong Go cũng hỗ trợ method và composition nên thực ra cũng khá dễ làm quen.

Một điểm giống JavaScript là các fields trong structure có thể có bất kì kiểu dữ liệu nào, có thể là một structure khác. Nên có thể tha hồ "chấm" dạo N lần, như này: `I.Dont.Want.To.Work`

À nữa, Go có pointer, và mặc định là pass-by-value nên bạn sẽ rơi vào cuộc chiến *"nên dùng value hay pointer đây"*.

# 3

Array trong Go giống hệt như trong C, có độ dài fix cứng khi khai báo và không thể tự mở rộng thêm. Đọc tới đây thì khá là buồn, tuy nhiên Go thì không low-tech như C nên chúng ta được giới thiệu tới khái niệm ***slice***.

Slice là một structure wrap lại array để giúp việc thao tác với chúng dễ dàng hơn. Slice có 2 thuộc tính: *length* và *capacity*. Capacity chính là độ dài của array mà slice wrap lại, length là độ dài mà slice này biểu diễn. Length thì không thể lớn hơn capacity.

Chúng ta chỉ thao tác được với các phần tử mà slice biểu diễn. Ví dụ ta có một slice với capacity 10, nhưng length là 0 thì gọi `slice[0]` sẽ xảy ra lỗi. Tuy nhiên việc wrap array bằng slice cộng thêm một mớ loằng ngoằng này đâu có giải quyết vấn đề độ dài fix cứng? Ừ, nhưng hàm `append` giải quyết được. `append` thêm một phần tử vào cuối slice, tăng length của nó thêm 1. Nếu length vượt quá capacity thì copy toàn bộ giá trị sang một array mới với length gấp đôi (tức capacity của slice tăng gấp đôi). Chỉ như vậy thôi là cuộc sống hạnh phúc hơn gấp trăm lần rồi =))

Map trong Go là một cấu trúc dữ liệu kiểu dạng key-value, khá cơ bản. Key và value có thể là bất kì kiểu dữ liệu nào. Map tự mở rộng được, nhưng nên hạn chế điều này nếu chúng ta biết trước được số lượng key mà Map sẽ chứa. Key-value của map khi trong vòng lặp sẽ có thứ tự random, không cố định.

# 4

Code trong Go được tổ chức theo package với root là `$GOPATH/src/`. Ở đầu file ta dùng keyword `package` để đặt cho nó một cái tên, khi `import` thì dùng complete path tính từ root. Go không cho phép việc 2 package import lẫn nhau (A import B và B import A). Để giải quyết điều này thì chúng ta phải tổ chức code cho tốt, tách phần code dùng chung ra các sub package con để import.

Go cũng hỗ trợ việc public/private biến và hàm được export bởi package bằng một rule đơn giản: Nếu tên biến, tên hàm hoặc tên struct bắt đầu bằng một kí tự uppercase, nó được export.

Trong Go có interface giống một số ngôn ngữ OOP khác. Tuy nhiên cú pháp định nghĩa một struct implement một interface được lược giản đi, và struct đó phải implement hết các method của interface. Struct cũng có thể implement nhiều interface cùng lúc. Một điểm thú vị là ta có thể viết một hàm nhận param là một empty interface: `interface{}`. Lúc này hàm sẽ nhận param với bất kì kiểu dữ liệu nào, vì tất cả các kiểu dữ liệu đều implement empty interface.

# 5

Chương 5 giới thiệu về những phần cơ bản còn lại của Go mà chưa được nhắc tới. Tiêu biểu có một số phần khá hay như:

- Error handling: Một common practice trong Go là return error thay vì throw error (dùng keyword `panic`). Cảm giác hơi lạ lạ khi không có try catch :v
- Defer: Một số trường hợp đọc file hoặc mở một connection, vì một lí do nào đó mà ta quên không gọi `file.Close()` chẳng hạn. Sử dụng `defer`, ví dụ `defer file.Close()` và đoạn code này sẽ được chạy cuối cùng trong hàm đó.
- Empty interface & conversions: Ở các ngôn ngữ OOP, thường sẽ có 1 base class (như `Object` trong Java) là superclass của mọi class khác. Go không có class, nhưng vẫn có một khái niệm là empty interface, là interface mà không có method nào. Mọi kiểu dữ liệu đều ngẫu nhiên implement interface này. Từ đó ta có thể viết hàm nhận và trả về biến có kiểu dữ liệu dynamic là empty interface này.
- Function type: Function trong Go cũng là first-class type (Yes!!! Giống JavaScript). Điều này có nghĩa là ta có thể truyền function vào một function khác và trả về function từ một function.

# 6

Chương cuối của cuốn sách, ***Concurrency***, giới thiệu hết sức cơ bản về concurrent programming với Go. Vì vậy mặc dù nắm bắt syntax thì nhanh nhưng những gì cuốn sách mang lại vẫn chưa làm mình thỏa mãn. Mình đã tìm đọc kha khá bài về concurrency trong Go, và bắt đầu thấy cả thuật ngữ *parallelism*.

Nếu dịch ra tiếng Việt thì *concurrency* là *đồng thời* và *parallelism* là *song song*. Vì nghĩa của 2 từ trên khá gần nhau nên nhiều người (bao gồm cả mình) thường lầm tưởng chúng là một. Nhưng không! Hãy hiểu như thế này:

"Bạn ngồi xem TV, tay thì nhắn tin với gấu và miệng thì nhâm nhi một tách trà. Có 3 việc ở đây: xem TV, nhắn tin, uống trà. Và chỉ có một mình bạn. Bạn làm cả 3 việc đồng thời với nhau, mỗi một thời điểm bạn chỉ làm được 1 việc. Đó là ***concurrency***.

Bây giờ hãy tưởng tượng bạn có bồ nhí ngồi bên cạnh, cùng xem TV với bạn, cùng... nhắn tin với gấu của bạn, cùng uống một tách trà với bạn. Có 2 người làm cùng 3 việc trên, đó là ***parallelism***."

Như vậy, với một ngôn ngữ lập trình, ngay cả khi bạn chỉ có 1 core CPU, bạn vẫn có thể làm nhiều việc đồng thời cùng một lúc. Quay lại với câu chuyện concurrent programming với Go, bạn sẽ được giới thiệu tới khái niệm ***goroutine***. Goroutine là một hàm có thể chạy xong xong với các hàm khác trong Go. Syntax các thứ được siêu tối giản để bạn không bao giờ phải lo việc đi khai báo hay phân vùng gì gì đó để code chạy được đồng thời. Goroutine cũng rất light-weight, được tối ưu tốt và không map trực tiếp vào thread của hệ điều hành. Vì vậy trong Go bạn có thể chạy đến hàng triệu goroutine cùng lúc. Đây là một trong những lí do vì sao Go được tung hô như vậy.

Bài toán đau đầu với các ngôn ngữ multi-thread là shared memory (các biến dùng chung) cũng được Go xử lý gọn gàng bằng cách... đừng dùng nó nữa (khuyên bạn như vậy thôi, chứ Go vẫn support việc dùng chung biến). Thay vào đó, lại một khái niệm mới khác: ***channel***. Các bạn lại hiểu như này:

"Có 3 người: Lão Hạc, người đưa thư và nhân viên bưu điện. Lão Hạc viết thư xong rồi bỏ vào hòm thư. Người đưa thư đến lấy thư từ hòm và mang về bưu điện. Nhân viên bưu điện phân loại thư và gửi đi. Cả 3 đều làm việc đồng thời. Nếu nhân viên bưu điện làm năng suất quá, anh sẽ đợi một chút để nhân viên đưa thư mang những lá thư mới đến. Nếu Lão Hạc đi đến nhà Chí Phèo đòi nợ, nhân viên đưa thư sẽ ra về không và đợi đến lá thư sau của Lão. 3 người trên đại diện cho 3 goroutine, còn những lá thư là shared memory. Channel ở đây là những con đường dẫn từ nhà Lão Hạc đến bưu điện và đến bàn làm việc của nhân viên bưu điện, tóm lại là đường vận chuyển data."

Với một người đã quen với asynchronous programming như mình, concurrent programming với Go yêu cầu một mindset mới trong việc tiếp cận vấn đề. Cũng như các cụ đẻ ra Go đã có câu: *"Don’t communicate by sharing memory, share memory by communicating."* Đôi khi ta chỉ cần đứng dưới góc nhìn khác một chút là mọi chuyện đã trở nên dễ dàng hơn rồi.
