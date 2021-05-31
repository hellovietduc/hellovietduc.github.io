---
template: post
title: Exponential backoff
socialImage: /media/posts/exponential-backoff/thumb.png
draft: false
date: 2021-04-29T04:30:00.000Z
description: What I learned about exponential backoff.
series: Today I learned
tags:
  - algorithm
---
## What is exponential backoff?

Exponential backoff is an algorithm often used in network applications for error handling. It's a strategy where a client periodically retries a failed request with increasing delays between requests. The best way to understand this algorithm is to look at an example:

1. A client makes a request to a server.
2. If the request fails, wait `1 + random` seconds and retry.
3. If the request fails, wait `2 + random` seconds and retry.
4. If the request fails, wait `4 + random` seconds and retry.
5. If the request fails, wait `8 + random` seconds and retry.
6. And so on, up to a `maximum backoff` time.
7. Continue to retry up to a maximum number of retries, but not increasing the delay.

As you can see, the delay between each request grows exponentially plus a `random` number. But what is that number? It's called *jitter*, usually much smaller than the main delay (in milliseconds). The reason it's random is to avoid retried requests hitting the server at the same time.

## How can I implement it?

It's fairly simple to implement exponential backoff. You can work it out yourself by looking at the example.

Here is the formula to calculate the delay on each request.

```
delay = min(((2^retry_count) + small_random_number), maximum_backoff)
```

Where:

- `retry_count` increments by 1 for each request.
- `small_random_number` is random for each request (you can choose somewhere between 0-20% of `2^retry_count`).
- `maximum_backoff` is the maximum delay.

## Why should I use it?

Exponential backoff spaces out retries, reduces burst requests coming to the servers, which leads to more reliable error handling.

*References:*

- *[Exponential Backoff And Jitter | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/)*
- *[Implementing exponential backoff  |  Cloud IoT Core Documentation](https://cloud.google.com/iot/docs/how-tos/exponential-backoff)*
