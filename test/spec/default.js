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