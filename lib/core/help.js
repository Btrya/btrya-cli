const program = require('commander')

const helpOptions = () => {
  // 增加自己的options
  program.option('-b --btrya', 'a btrya cli')
  program.option('-d --dest <dest>', 'a destination folder, example: -d /src/components')
  program.option('-f --framework <framework>', 'your frameword')

  program.on('--help', function() {
    console.log("--------------------------------------------------------")
    console.log("Btrya: ")
    console.log("   Btrya大帅比！！！！")
  })
}

module.exports = helpOptions