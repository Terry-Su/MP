const defaultInterface = require('./defaultInterface')

const mapPlainObjectValuesAToB = (a, b) => {
  const keysOfA = Object.keys(a)
  const updateBValueByKey = key => b[key] = a[key]
  keysOfA.map(updateBValueByKey)
}

function Interface() {
  mapPlainObjectValuesAToB(defaultInterface, this)
}

Interface.prototype.updateInterface = function(interface = {}) {
  mapPlainObjectValuesAToB(interface, this)
}

const interface = new Interface()

module.exports = interface