---
layout: ../../layouts/BlogPost.astro
title: I've been handling Stream events wrong, and you might as well
imageUrl: /media/posts/ive-been-handling-stream-events-wrong-and-you-might-as-well/thumb.png
publishedDate: 2021-07-20
description: Handling events in Node.js is sometimes tricky. You don't want to make this mistake that I did.
tags:
  - Node.js
---

## The what

It's very likely that when you are looking for a Node.js Stream code, you find something similar to this:

```jsx
fs.createReadStream('./data.txt')
  .pipe(writableStream)
  .on('data', (data) => {
    // do something with the data
  })
  .on('end', () => {
    // done writing
  })
```

The chainability of the API makes the code look clean. You like it and copy-paste it to your project. However, you notice something missing here. Ah, error handling! So you add it and now the code looks like this:

```jsx
fs.createReadStream('./data.txt')
  .pipe(writableStream)
  .on('data', (data) => {
    // do something with the data
  })
  .on('end', () => {
    // done writing
  })
  .on('error', (err) => {
    console.error('nothing escapes my traps!', err)
  })
```

Pleased with the carefulness you put into your code, you push this to the main branch and deploy the project. 5 hours later, your boss knocks at your inbox with a screenshot of the logs.

```jsx
events.js:292
      throw er; // Unhandled 'error' event
```

You:

![Thanos impossible meme](../img/thanos-impossible-meme.png)

## The why

A lot of people (including me) at first glance think this code is complete and error-free. We're fooled by the beauty of chainability and forget that there are 2 stream objects in this code: a readable stream and a writable stream.

```jsx
const readableStream = fs.createReadStream('./data.txt')
readableStream
	.pipe(writableStream)
	...
```

The `pipe()` method on the `readableStream` returns the `writableStream` for chaining. In fact, in the code above, the `readableStream` has no event handlers, hence the `Unhandled 'error' event` log.

All you need to do is to add another error handler for the `readableStream`.

```jsx
const readableStream = fs.createReadStream('./data.txt')
readableStream
	.on('error', err => {
		// handle error when reading file
	})
	.pipe(writableStream)
	...
```

## The notes

One more thing to note: when the `readableStream` emits an `error` event, the `writableStream` is not automatically closed. So you always need to manually close `writableStream` to prevent memory leaks.

```jsx
const readableStream = fs.createReadStream('./data.txt')
readableStream
	.on('error', err => {
		// handle error when reading file
		writableStream.close()
	})
	.pipe(writableStream)
	...
```
