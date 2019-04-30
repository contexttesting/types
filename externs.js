/* typal types/index.xml externs */
/** @const */
var _contextTesting = {}
/**
 * The constructor class of a context.
 * @typedef {function(new: _contextTesting.Context)}
 */
_contextTesting.ContextConstructor
/**
 * The context made with a constructor, or an object.
 * @typedef {{ _init: ((function(): !Promise|void)|undefined), _destroy: ((function(): !Promise|void)|undefined) }}
 */
_contextTesting.Context
