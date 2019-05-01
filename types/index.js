export {}

/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_contextTesting.ContextConstructor} ContextConstructor The constructor class of a context.
 */
/**
 * @typedef {function(new: _contextTesting.Context)} _contextTesting.ContextConstructor The constructor class of a context.
 */
/**
 * @typedef {_contextTesting.Context} Context The context made with a constructor.
 */
/**
 * @typedef {Object} _contextTesting.Context The context made with a constructor.
 * @prop {function(): !Promise|void} [_init] The function to initialise the context before each test.
 * @prop {function(): !Promise|void} [_destroy] The function to destroy the context after its test is run.
 */

/* typal types/test-suite.xml closure noSuppress */
/**
 * @typedef {_contextTesting.TestSuite} TestSuite `@record` The test suite interface.
 */
/**
 * @typedef {Object} _contextTesting.TestSuite `@record` The test suite interface.
 * @prop {string} name The name of the test suite.
 * @prop {boolean} isFocused If the test suite is focused.
 * @prop {boolean} hasFocused Whether the test suite has focused tests.
 * @prop {!Array<!(_contextTesting.Test|_contextTesting.TestSuite)>} tests Whether the test suite has focused tests.
 */
/**
 * @typedef {_contextTesting.Test} Test `@record` The test interface required for the reducer.
 */
/**
 * @typedef {Object} _contextTesting.Test `@record` The test interface required for the reducer.
 * @prop {string} name The name of the test.
 * @prop {function(..._contextTesting.Context): !Promise|void} fn The test function to run.
 * @prop {boolean} isFocused If the name of the test has `!`.
 */
