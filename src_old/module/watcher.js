function Watcher() {
    this.store = {}
}

Watcher.prototype.save = function (key, watcher) {
    this.store[key] = watcher
    return watcher
}

Watcher.prototype.load = function (key) {
    return this.store[key]
}

Watcher.prototype.reset = function (key) {
    const watcher = this.store[key]
    if (watcher) {
        watcher.close()
    }
}

module.exports = new Watcher()