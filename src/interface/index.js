const Util = require('../util/index')

const defaultInterface = require('./defaultInterface')

const mapPlainObjectValuesAToB = (a, b) => {
  const keysOfA = Object.keys(a)
  const updateBValueByKey = key => b[key] = a[key]
  keysOfA.map(updateBValueByKey)
}

function Interface() {
  Util.mapPlainObjectValuesAToB(defaultInterface, this)
}

Interface.prototype.updateInterface = function(interface = {}) {
  Util.mapPlainObjectValuesAToB(interface, this)
}

const interface = new Interface()

module.exports = interface