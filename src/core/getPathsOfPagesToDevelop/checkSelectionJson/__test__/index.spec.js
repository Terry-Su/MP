const { exec } = require('child_process')
exec(`webpack --watch --color`).stdout.pipe(process.stdout)
