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