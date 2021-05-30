---
template: post
title: esModuleInterop
socialImage: /media/posts/esmoduleinterop/thumb.png
draft: false
date: 2021-04-26T04:30:00.000Z
description: What I learned about the esModuleInterop option in TypeScript.
category: Today I learned
tags:
  - typescript
---
## The problem

So I was working on a TypeScript codebase where I needed to create a new package. As lazy as I could, I copy-pasted some files from another similar package. Everything was all smooth sailing until I ran the tests. Boom!

```
axios_retry_1.default is not a function
```

Noob-to-TS me asked: *"OK, why is it calling `default`?"*

A quick Google search told me that when TypeScript transpiles the code to JavaScript, a default export assigns the exported variable to the `default` property of `module.exports`.

```jsx
export default Foo
// becomes
exports.default = Foo
```

Therefore, when we do a default import like this:

```tsx
import axiosRetry from 'axios-retry'
```

We actually expect the `default` property to be callable. But `axios-retry` is written in plain JavaScript. It doesn't export default.

Well, that's not a big problem. I imported modules written in CommonJS to TypeScript before. A star import would always work.

```tsx
import * as axiosRetry from 'axios-retry'
```

But this time, I was thinking if there was a better way to do this. I hate extra meaningless keystrokes in my code. And that's how I stumbled across `esModuleInterop`.

## What is `esModuleInterop`?

It's an option in `tsconfig.json` that allows importing CommonJS modules in compliance with the ES6 spec. But what does the spec says? It says: *a star import can only be a plain object, not callable*. In this case, `axiosRetry` is not an object. It's a function I actually want to call. So the star import here isn't compliant with the spec.

By setting `esModuleInterop` to `true`, I can import `axios-retry` by the default import syntax and also get rid of the error I met earlier. Nice and clean!

```tsx
import axiosRetry from 'axios-retry' // spec compliant

axiosRetry(axios) // can call it too!
```

If I try calling `axiosRetry` when it's star imported, I'll get a compile-time error.

```tsx
import * as axiosRetry from 'axios-retry'

axiosRetry(axios) // -> This expression is not callable.
```

## (Optional) How does it work?

When enabling `esModuleInterop`, modules are not imported directly but instead through a helper function `__importDefault`.

```jsx
const axios_retry_1 = __importDefault(require('axios-retry'))
```

The `__importDefault` function looks like this:

```jsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
```

As you can see, if the imported module is not an ES6 module (checked via the `__esModule` property), this function assigns the module to the `default` property and returns it. Otherwise, it returns an untouched module.
