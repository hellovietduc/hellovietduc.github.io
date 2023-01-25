---
layout: ../../layouts/BlogPost.astro
title: MIME types are not stored in the filesystem
imageUrl: /media/posts/mime-types-are-not-stored-in-the-filesystem/thumb.png
publishedDate: 2021-05-31
description: My new learning about MIME types.
tags:
  - TIL
  - MIME
---

I used to think that a MIME type was an accurate file type indicator, and a file extension was not to be trusted. This was mainly because it is much easier to edit a file extension, but not a file's MIME type?!

That was until I figured out that **MIME types are not stored in the filesystem.** (At least, excluding modern cloud storage services.)

What?? OK, time to learn the truth.

A MIME type is a [standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) that indicates the format of a file/what type of content it stores. But by the time it was invented, different operating systems already had their own ways to determine this information. (One of which is file extensions!)

So if you look at a file that is served by a web server, trying to figure out what it is, and you think that the MIME type is a more trustworthy indicator than the file extension, it's not! The server that's just sent you the file had to do the dirty work of guessing the file type, mapping it to a standard MIME type, and delivering it back to you via the `Content-Type` header. No special magic!

But it doesn't mean MIME types are useless. There's a reason why they are strongly used on the Internet. They free the clients (you — your computer/smartphone/whatever) from guessing the file type. Browsers use the MIME type to determine how to process a URL. Imagine if for every file a browser received, it had to scan the file bytes, or worse, blindly trust the file extension before it could start its job; how terrible things would be?

*References:*

- [*linux - How do you change the MIME type of a file from the terminal? - Stack Overflow*](https://stackoverflow.com/questions/29017725/how-do-you-change-the-mime-type-of-a-file-from-the-terminal)
- [*What is the relationship between MIME types and File .extensions? - Ask Ubuntu*](https://askubuntu.com/questions/7517/what-is-the-relationship-between-mime-types-and-file-extensions)
