/* yarn example/ */
import types from '../src'

(async () => {
  const res = await types({
    text: 'example',
  })
  console.log(res)
})()