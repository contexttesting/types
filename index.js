export {}

/* typal types/index.xml */
/**
 * @typedef {function(new: _contextTesting.Context)} ContextConstructor The constructor class of a context.
 * @typedef {Object} Context The context made with a constructor, or an object.
 * @prop {function(): !Promise|void} [_init] The function to initialise the context before each test.
 * @prop {function(): !Promise|void} [_destroy] The function to destroy the context after its test is run.
 */
