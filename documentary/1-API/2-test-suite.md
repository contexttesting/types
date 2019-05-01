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
  /**
   * Whether test suite has focused tests.
   */
  get hasFocused(){
    // this.names is a nested collection of inner test and test suite names.
    return this.names.some(n => n.startsWith('!'))
  }
  get isFocused() {
    return this.name.startsWith('!')
  }
}
```

```js
// @zoroaster/reducer
/**
 * Run all tests in sequence, one by one.
 * This also runs only selected tests, e.g., !test and !test suite
 * @param {!Array<!(_contextTesting.Test|_contextTesting.TestSuite)>} tests An array with tests.
 * @param {_contextTesting.ReducerConfig} config The options for the reducer.
 */
const reducer = async (tests, config) => {
  await tests.reduce(async (acc, test) => {
    const {
      name, isFocused, fn, hasFocused, // accessing the interface API
    } = test
    const isTest = !!fn
    if (allCanRun || isFocused || hasFocused) {
      /* ... */
    }
  }
}
```

%TYPEDEF types/test-suite.xml%

%~%