const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')

const createProjectAction = async (project, others) => {
  // 1.clone 项目
  await download(vueRepo, project, { clone: true })
  console.log(`Create ${project} success, thanks use Btrya-Cli`)
  // 2.执行 npm install
  // 3.运行 npm run serve
  // 4.打开浏览器
}

module.exports = {
  createProjectAction
}