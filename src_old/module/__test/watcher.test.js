const Watcher = require('../watcher.js')


const watcher1 = {
    close() {
        console.log('watcher1 was closed!')
    }
}

const watcher2 = {
    close() {
        console.log('watcher2 was closed!')
    }
}

// save 
Watcher.save('WATCHER1', watcher1)
Watcher.save('WATCHER2', watcher2)

console.log(`Watcher's store: ${Watcher.store}`)

// load
console.log( `Load WATCHER1: ${Watcher.load('WATCHER1')}` )
console.log( `Load WATCHER2: ${Watcher.load('WATCHER2')}` )

// cloase
console.log( `Close WATCHER1: ` )
Watcher.reset('WATCHER1')

console.log( `Close WATCHER2: ` )
Watcher.reset('WATCHER2')