---
template: post
title: 10 terminal tools giúp bạn tăng hiệu suất làm việc
socialImage: /media/posts/10-terminal-tools-giup-ban-tang-hieu-suat-lam-viec/thumb.png
draft: false
date: 2020-05-02T04:30:00.000Z
description: 10 terminal tools giúp việc thao tác trên terminal trở nên ngầu
  lòi, nhanh chóng và hiệu quả.
tags:
  - terminal
---

Bạn có sử dụng terminal hàng ngày không? Bạn có thường xuyên cảm thấy gõ lệnh trên terminal thật chán và hay chuyển sang tìm các GUI apps để thay thế? Đó là vì bạn chưa tìm ra những tools thú vị giúp việc thao tác trên terminal trở nên ngầu lòi, nhanh chóng và hiệu quả hơn các GUI apps nhiều lần.

Hôm nay, mình sẽ chia sẻ 10 terminal tools giúp tăng hiệu suất làm việc của bạn. List là ý kiến cá nhân của mình và không được sắp xếp theo thứ tự đặc biệt gì cả.

## 1. zsh

[ZSH](https://en.wikipedia.org/wiki/Z_shell) là một phiên bản mở rộng của Bourne Shell (sh), nôm na là cùng cha khác mẹ với Bash. Vì vậy ZSH có rất nhiều điểm chung với Bash và gần như không yêu cầu bạn phải làm quen lại từ đầu. Apple thậm chí đã dùng ZSH làm shell mặc định cho phiên bản MacOS mới nhất Catalina.

Tính năng hay nhất của ZSH chính là khả năng mở rộng bằng plugins và themes. Có đủ loại plugins cho mọi yêu cầu khác nhau. Các bạn có thể thoải mái biến tùy biến terminal của mình với list [awesome-zsh-plugins](https://github.com/unixorn/awesome-zsh-plugins) này (rất khuyên các bạn cài [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) đầu tiên).

## 2. fast-syntax-highlighting và zsh-autosuggestions

Nếu đã sử dụng ZSH rồi thì không có lí do gì mà bạn không nên dùng thêm 2 plugins này.

[fast-syntax-highlighting](https://github.com/zdharma/fast-syntax-highlighting) cung cấp syntax highlighting và format cho các câu lệnh bạn gõ trên terminal, cũng như cho output của một số câu lệnh thông dụng. Nếu bạn gõ sai, chẳng hạn `git` thành `gjt` thì fast-syntax-highlighting sẽ bôi đỏ `gjt` để cho bạn biết.

![](https://raw.githubusercontent.com/zdharma/fast-syntax-highlighting/master/images/highlight-much.png)

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) gợi ý câu lệnh dựa vào lịch sử command line hoặc tab completion và hiển thị mờ mờ tại con trỏ ngay khi bạn đang gõ. Với tính năng xịn xò này bạn có thể gõ terminal với tốc độ thần gió và ít phải nhớ câu lệnh hơn.

<a href="https://asciinema.org/a/37390" target="_blank"><img src="https://asciinema.org/a/37390.png" width="400" /></a>

Ngoài ra khi sử dụng một chương trình nào đó thường xuyên, bạn cũng nên Google từ khóa "tên chương trình + zsh auto completion" để tìm và cài thêm plugins. Mỗi khi gõ chỉ cần Tab là hiện ra suggestions rất tiện.

## 3. fzf

Nếu cho mình chọn chỉ một trong số 10 terminal tools mình gợi ý cho các bạn hôm nay, thì mình sẽ chọn [fzf](https://github.com/junegunn/fzf). Nếu như zsh-autosuggestions chỉ giúp bạn ít phải nhớ câu lệnh hơn, thì fzf sẽ giúp bạn không còn phải nhớ chúng nữa.

fzf đọc lịch sử gõ terminal của bạn và cung cấp một giao diện fuzzy search cực kì xịn. Bạn chỉ cần gõ 2-3 kí tự của câu lệnh cần tìm là gần như đã có thể thấy nó xuất hiện ở kết quả search rồi. Từ tốc độ thần gió, bạn đã có thể gõ terminal với tốc độ người yêu lật mặt =))

![](https://miro.medium.com/max/3284/0*w9bAo-aW3ruV15oz.png)

fzf chạy được trên hầu hết các shell (bao gồm cả ZSH và Bash), thậm chí có cả plugin cho Vim và nhiều chương trình khác.

## 4. bat

`cat` chắc chắn là một trong những câu lệnh bạn dùng nhiều nhất trong terminal. Vậy tại sao lại không gắn thêm cánh cho mèo? [bat](https://github.com/sharkdp/bat) cung cấp syntax highlighting cho rất nhiều ngôn ngữ lập trình và ngôn ngữ markup, thậm chí đánh dấu cả dòng có sự thay đổi dựa vào git. Nhìn output của bat chắc chắn sướng mắt hơn nhiều phải không?

![](https://camo.githubusercontent.com/67e44f4a68150325f74b3a46820b7473ff7b91a6/68747470733a2f2f692e696d6775722e636f6d2f326c53573452452e706e67)

## 5. lazygit

Như cái tên, [lazygit](https://github.com/jesseduffield/lazygit) dành cho những con người lười dùng câu lệnh git. Giao diện của lazygit khá đầy đủ, bạn có thể xem các file thay đổi, commit, chuyển nhánh... tất tần tật trên đây.

![](https://opensource.com/sites/default/files/uploads/lazygit_1.png)

## 6. diff-so-fancy

Nếu sử dụng lazygit thường xuyên thì bạn sẽ nhìn qua nhìn lại output của `git diff` khá nhiều. Có điều là diff mặc định của git nhìn khá chán, khó đọc. [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy) biến output này thành gần giống như của GitHub hay VSCode, nhìn dễ hơn nhiều. Bạn có thể custom lại config màu theo ý thích. diff-so-fancy áp dụng output này cho tất cả câu lệnh `git diff` chứ không chỉ riêng khi chạy lazygit.

![](https://user-images.githubusercontent.com/3429760/32387617-44c873da-c082-11e7-829c-6160b853adcb.png)

## 7. tmux

[tmux](https://github.com/tmux/tmux) là một chương trình giúp bạn phân chia màn hình terminal ra nhiều panes và windows, và lưu layout đó dưới một session. Bạn có thể tạo nhiều sessions và chuyển qua lại giữa chúng mà không mất layout của session cũ. tmux cũng hỗ trợ plugins và themes rất đa dạng, các bạn có thể tham khảo ở list [awesome-tmux](https://github.com/rothgar/awesome-tmux).

![](https://www.hamvocke.com/assets/img/uploads/tmux.png)

## 8. tmuxp

tmux rất tuyệt, cho đến khi bạn phải restart máy tính. Với [tmuxp](https://github.com/tmux-python/tmuxp), bạn có thể lưu layout của mình lại dưới dạng file YAML hoặc JSON. Mọi thứ lại tuyệt trở lại, trừ khi bạn bị virus ăn mất file config layout mà thôi 😁

## 9. nnn

[nnn](https://github.com/jarun/nnn) là một trình quản lý file trên terminal, vì thế mà tốc độ duyệt files và thư mục rất nhanh. Bạn vẫn có thể preview ảnh và mở files bằng GUI apps. Ngoài ra, nnn còn có những tính năng khác như batch rename, mở file text sang một pane tmux bên cạnh, type-to-nav, v.v.

![](https://camo.githubusercontent.com/d7abd98b23e90b9b4c295e2b15b7150b53cdd5a0/68747470733a2f2f692e696d6775722e636f6d2f4d5057706d6f732e706e67)

## 10. tldr

TL;DR (viết tắt của "Too Long. Didn't Read") là khi một bài viết dài quá, bạn lười đọc nên tác giả để một phần đầu hoặc cuối bài tóm tắt lại những ý chính. Tương tự, các terminal tools đôi khi có quá nhiều commands, options mà hầu hết đều không dùng đến. [tldr](https://github.com/tldr-pages/tldr) là một chương trình tóm tắt và trình bày lại ngắn gọn vài câu lệnh hay sử dụng của một chương trình nào đó. Ví dụ bạn muốn xem qua cách sử dụng `tar` thì chỉ cần gõ `tldr tar`.

![](https://tldr.sh/assets/img/screenshot.png)
