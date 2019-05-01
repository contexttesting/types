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

%TYPEDEF types/test-suite.xml%

%~%