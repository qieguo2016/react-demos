/**
 * @authors     : qieguo
 * @date        : 2017/1/13
 * @version     : 1.0
 * @description : 服务器日志控制器
 */

const env = process.env.NODE_ENV || "development";
const log4js = require('log4js');
const fs = require('fs');
const dir = 'logs/'

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}


log4js.configure({
  appenders: [
    {type: 'console'},
    {type: 'file', filename: dir + 'cheese.log', category: 'cheese'}
  ],
  replaceConsole: true
});

let logger = log4js.getLogger('cheese');
logger.setLevel(env === 'development' ? 'DEBUG' : 'INFO')

module.exports = logger;

