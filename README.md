# @zoroaster/types

[![npm version](https://badge.fury.io/js/%40zoroaster%2Ftypes.svg)](https://npmjs.org/package/@zoroaster/types)

`@zoroaster/types` is the types in context testing.

```sh
yarn add -D @zoroaster/types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [Context](#context)
  * [`_contextTesting.ContextConstructor`](#type-_contexttestingcontextconstructor)
  * [`_contextTesting.Context`](#type-_contexttestingcontext)
  * [Context Example](#context-example)
- [Test Suite & Test](#test-suite--test)
  * [`_contextTesting.TestSuite`](#type-_contexttestingtestsuite)
  * [`_contextTesting.Test`](#type-_contexttestingtest)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package can enable _VSCode_ types highlighting by importing its types via the `@typedef`:

```js
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('@zoroaster/types').Test} _contextTesting.ContextConstructor
 * @typedef {import('@zoroaster/types').TestSuite} _contextTesting.TestSuite
 * @typedef {import('@zoroaster/types').ContextConstructor} _contextTesting.ContextConstructor
 * @typedef {import('@zoroaster/types').Context} _contextTesting.Context
 */
```

The types and [externs](externs.js) for _Google Closure Compiler_ via [**_Depack_**](https://github.com/dpck/depack) are defined in the `_contextTesting` namespace.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Context

The `context` is the property on test suites which contains either an object, or Context Constructors -- classes used to create a new context for tests.

`function(new: _contextTesting.Context)` __<a name="type-_contexttestingcontextconstructor">`_contextTesting.ContextConstructor`</a>__: The constructor class of a context.

__<a name="type-_contexttestingcontext">`_contextTesting.Context`</a>__: The context made with a constructor.

|   Name   |                  Type                   |                        Description                         |
| -------- | --------------------------------------- | ---------------------------------------------------------- |
| _init    | <em>function(): (!Promise \| void)</em> | The function to initialise the context before each test.   |
| _destroy | <em>function(): (!Promise \| void)</em> | The function to destroy the context after its test is run. |

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true" width="25"></a></p>

### Context Example

The context is used to put all service methods for test cases into a single class, and access them via tests' arguments.

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
```js
import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import types from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof types, 'function')
  },
  async 'calls package without error'() {
    await types()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await types({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Test Suite & Test

_@Zoroaster/types_ package also provides interfaces for the test and test suite types. They are useful to establish communication between the `@zoroaster/reducer` library and `zoroaster` binary so that they both support the same properties and the compiler can check them correctly.

```js
// zoroaster
/**
 * A test suite is a collection of tests with any number of contexts.
 * @implements {_contextTesting.TestSuite}
 */
export default class TestSuite {
  /* ... */
}
```

```js
// @zoroaster/reducer
/**
 * Run all tests in sequence, one by one.
 * This also runs only selected tests, e.g., !test and !test suite
 * @param {!Array<!(_contextTesting.Test|_contextTesting.TestSuite)>} tests An array with tests to reduce.
 * @param {_contextTesting.ReducerConfig} config The options for the reducer.
 */
const reducer = async (tests, config) => {
  /* ... */
}
```

__<a name="type-_contexttestingtestsuite">`_contextTesting.TestSuite`</a>__: The test suite interface.

|      Name       |                                                                                                                          Type                                                                                                                           |                Description                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| __name*__       | <em>string</em>                                                                                                                                                                                                                                         | The name of the test suite.               |
| __isFocused*__  | <em>boolean</em>                                                                                                                                                                                                                                        | If the test suite is focused.             |
| __hasFocused*__ | <em>boolean</em>                                                                                                                                                                                                                                        | Whether the test suite has focused tests. |
| __tests*__      | <em>!Array&lt;!(<a href="#type-_contexttestingtest" title="The test interface required for the reducer.">_contextTesting.Test</a> \| <a href="#type-_contexttestingtestsuite" title="The test suite interface.">_contextTesting.TestSuite</a>)&gt;</em> | Whether the test suite has focused tests. |

__<a name="type-_contexttestingtest">`_contextTesting.Test`</a>__: The test interface required for the reducer.

|      Name      |                                                                           Type                                                                            |           Description            |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| __name*__      | <em>string</em>                                                                                                                                           | The name of the test.            |
| __fn*__        | <em>function(...<a href="#type-_contexttestingcontext" title="The context made with a constructor.">_contextTesting.Context</a>): (!Promise \| void)</em> | The test function to run.        |
| __isFocused*__ | <em>boolean</em>                                                                                                                                          | If the name of the test has `!`. |

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright


  (c) [Context Testing](https://contexttesting.com) 2019


<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>