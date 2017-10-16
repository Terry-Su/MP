const { init } = require('../../controller/index.js')

try {
  init()
} catch(e) {
  console.log('Main Test error:' + e)
}