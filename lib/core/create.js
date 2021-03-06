const program = require('commander')
const { createProjectAction } = require('./action')

const createCommand = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)
}

module.exports = createCommand