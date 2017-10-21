const { init } = require('../../controller/index.js')
// init()
try {
  init()
} catch(e) {
  console.log('Main Test error:' + e)
}