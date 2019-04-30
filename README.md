# @zoroaster/types

[![npm version](https://badge.fury.io/js/%40zoroaster%2Ftypes.svg)](https://npmjs.org/package/@zoroaster/types)

`@zoroaster/types` is the types in context testing.

```sh
yarn add -D @zoroaster/types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`_contextTesting.Context`](#type-_contexttestingcontext)
  * [`_contextTesting.ContextConstructor`](#type-_contexttestingcontextconstructor)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its types via the `@typedef`:

```js
/**
 * @typedef {import('@zoroaster/types').ContextConstructor} ContextConstructor
 * @typedef {import('@zoroaster/types').Context} Context
 */
```

__<a name="type-_contexttestingcontext">`_contextTesting.Context`</a>__: The context made with a constructor, or an object.

|   Name   |                  Type                   |                        Description                         |
| -------- | --------------------------------------- | ---------------------------------------------------------- |
| _init    | <em>function(): (!Promise \| void)</em> | The function to initialise the context before the test.    |
| _destroy | <em>function(): (!Promise \| void)</em> | The function to destroy the context after the test is run. |

`function(new: _contextTesting.Context)` __<a name="type-_contexttestingcontextconstructor">`_contextTesting.ContextConstructor`</a>__: The constructor class of a context.

```js
import { join } from 'path'
import { debuglog } from 'util'

const LOG = debuglog('@zoroaster/types')

const FIXTURE = 'test/fixture'

/**
 * A testing context for the package.
 */
export default class Context {
  async _init() {
    LOG('init context')
  }
  /**
   * Example method.
   */
  example() {
    return 'OK'
  }
  /**
   * Path to the fixture file.
   */
  get FIXTURE() {
    return join(FIXTURE, 'test.txt')
  }
  async _destroy() {
    LOG('destroy context')
  }
}
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Copyright


  (c) [Context Testing](https://contexttesting.com) 2019


<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>