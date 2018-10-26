# @zoroaster/types

[![npm version](https://badge.fury.io/js/%40zoroaster%2Ftypes.svg)](https://npmjs.org/package/@zoroaster/types)

`@zoroaster/types` is the types in context testing.

```sh
yarn add -E @zoroaster/types
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`Context`](#type-context)
  * [`ContextConstructor`](#type-contextconstructor)
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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

__<a name="type-context">`Context`</a>__: A context made with a constructor.

|   Name   |      Type       |              Description              |
| -------- | --------------- | ------------------------------------- |
| _init    | _() =&gt; void_ | A function to initialise the context. |
| _destroy | _() =&gt; void_ | A function to destroy the context.    |

`{new(...args: any[]): Context}` __<a name="type-contextconstructor">`ContextConstructor`</a>__: A function or class or object that makes a context

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Context Testing][1] 2018

[1]: https://contexttesting.com

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>