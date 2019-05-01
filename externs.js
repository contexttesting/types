/* typal types/index.xml externs */
/** @const */
var _contextTesting = {}
/**
 * The constructor class of a context.
 * @typedef {function(new: _contextTesting.Context)}
 */
_contextTesting.ContextConstructor
/**
 * The context made with a constructor.
 * @typedef {{ _init: ((function(): !Promise|void)|undefined), _destroy: ((function(): !Promise|void)|undefined) }}
 */
_contextTesting.Context

/* typal types/test-suite.xml externs */
/**
 * The test suite interface.
 * @record
 */
_contextTesting.TestSuite
/**
 * The name of the test suite.
 * @type {string}
 */
_contextTesting.TestSuite.prototype.name
/**
 * If the test suite is focused.
 * @type {boolean}
 */
_contextTesting.TestSuite.prototype.isFocused
/**
 * Whether the test suite has focused tests.
 * @type {boolean}
 */
_contextTesting.TestSuite.prototype.hasFocused
/**
 * Whether the test suite has focused tests.
 * @type {!Array<!(_contextTesting.Test|_contextTesting.TestSuite)>}
 */
_contextTesting.TestSuite.prototype.tests
/**
 * The test interface required for the reducer.
 * @record
 */
_contextTesting.Test
/**
 * The name of the test.
 * @type {string}
 */
_contextTesting.Test.prototype.name
/**
 * The test function to run.
 * @type {function(..._contextTesting.Context): !Promise|void}
 */
_contextTesting.Test.prototype.fn
/**
 * If the name of the test has `!`.
 * @type {boolean}
 */
_contextTesting.Test.prototype.isFocused
