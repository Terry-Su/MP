module.exports = function (a, b) {
    const keysOfA = Object.keys(a)
    const updateBValueByKey = key => b[key] = a[key]
    keysOfA.map(updateBValueByKey)
}