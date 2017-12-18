const updatePagesInfoToDevelopByReadline = require('./updatePagesInfoToDevelopByReadline')
const updatePagesInfoToDevelopByReadlineCommands = require('./updatePagesInfoToDevelopByReadlineCommands')

const shoudUpdateByReadlineCommands = readlineCommands => Config.readlineCommands && Object.keys(readlineCommands).length > 0

module.exports = function () {
  const shoudUpdateByReadlineCommandsState = shoudUpdateByReadlineCommands(Config.readlineCommands)
  if (shoudUpdateByReadlineCommandsState) {
    updatePagesInfoToDevelopByReadlineCommands()
  }
  if (!shoudUpdateByReadlineCommandsState) {
    updatePagesInfoToDevelopByReadline()
  }
}