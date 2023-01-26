---
layout: ../../layouts/BlogPost.astro
title: A short note about mocking in Jest
imageUrl: /media/posts/a-short-note-about-mocking-in-jest/thumb.png
publishedDate: 2021-06-01
description: 2 ways to mock a Node.js module with Jest.
tags:
  - Jest
---

## The situation

Suppose we have the following code.

```javascript
const { Storage } = require('@google-cloud/storage')

const storage = new Storage()

const getFile = (bucketName, filename) => {
  const bucket = storage.bucket(bucketName)
  return bucket.file(filename) // this makes an API request and returns a Promise
}
```

Since we wouldn't like our tests to hit the Cloud Storage API (that's slow and sometimes flaky), we need to mock the `@google-cloud/storage` module. There are a few ways we can do that.

## `__mocks__` directory

With this kind of mocking, we create a mock module inside the `__mocks__` directory. Where to create this directory depends on what kind of module we're mocking. `@google-cloud/storage` is a scoped Node module so we need to create a directory structure like this:

```
<root_dir>/__mocks__/@google-cloud/storage.js
```

The `storage.js` file is our mock file. We replace the `Storage` class with our own implementation.

```javascript
const cloudStorage = jest.createMockFromModule('@google-cloud/storage')

cloudStorage.Storage = class {
  bucket(bucketName) {
    const bucket = {
      file: (filename) => {
        const fakeFile = {
          // ...
        }
        return Promise.resolve(fakeFile)
      }
    }
    return bucket
  }
}

module.exports = cloudStorage
```

In our test files, we don't need to explicitly call `jest.mock('@google-cloud/storage')`. The module is automatically mocked. This behavior can be turned off by using [`jest.unmock()`](https://jestjs.io/docs/jest-object#jestunmockmodulename).

```javascript
const { getFile } = require('./storage')

test('can return a file at a specific bucket', async () => {
  // call `getFile`
  // test assertions
})
```

However, if we mock a user-written module or a built-in Node.js module, calling `jest.mock()` is required.

## `jest.mock()`'s factory function

[`jest.mock()`](https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options) has a second argument that accepts a factory function. When provided, Jest will replace the actual module with whatever this factory function returns.

```javascript
const mockedStorage = ({ fakeFile }) => {
  return class {
    bucket(bucketName) {
      const bucket = {
        file: (filename) => {
          return Promise.resolve(fakeFile)
        }
      }
      return bucket
    }
  }
}

test('can return a file at a specific bucket', async () => {
  const fakeFile = {
    // ...
  }

  jest.mock('@google-cloud/storage', () => ({
    Storage: mockedStorage({ fakeFile })
  }))

  const { getFile } = require('./storage')
  // call `getFile`
  // test assertions
})
```

Notice that the `require` statement must be called after `jest.mock()`.

This kind of mocking is intended to be used when we want to mock a module differently within the same file. By making the mock generating code into a separate function, different test cases can get different mocks that behave as expected with the given input.

## A small tip when writing mocks

A mock module doesn't have to implement everything the original module has. It should be as simple as possible — only contains the necessary parts to make the code that we're testing run.

*References:*

- [*Manual Mocks · Jest*](https://jestjs.io/docs/manual-mocks)
- [*The Jest Object · Jest*](https://jestjs.io/docs/jest-object)
