#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');

// 获取commader的单例
// const { program } = commander;

// 实例化一个Command实例
const program = new commander.Command();

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  .option('-e, --env <envName>', '获取环境变量的名称');
// console.log(program.opts()); // best-test -e 123

// command api 注册命令 <> 必选 [] 可选
/**
 * best-test clone aaa bbb --force / best-test clone --force aaa bbb => do clone aaa bbb true
 * best-test clone aaa bbb => do clone aaa bbb undefined
 */
const clone = program.command('clone <source> [destination]');
clone
  .description('clone a repository')
  .option('-f, --force', '是否强制克隆')
  .action((source, destination, cmdObj) => {
    console.log('do clone', source, destination, cmdObj.force);
  });

// addCommand 注册子命令
// best-test service start 8888 => do service start 8888
const service = new commander.Command('service');
service
  .command('start [port]')
  .description('start service at some port')
  .action((port) => {
    console.log('do service start', port);
  });

// best-test service stop => stop service
service
  .command('stop')
  .description('stop service')
  .action(() => {
    console.log('stop service');
  });
program.addCommand(service);

// best-test install init => best-cli init
program
  .command('install [name]', 'install package', {
    executableFile: 'best-cli',
    // isDefault: true,
    // hidden: true,
  })
  .alias('i');

// program
//   .arguments('<cmd> [options]')
//   .description('test command', {
//     cmd: 'command to run',
//     options: 'options for command',
//   })
//   .action((cmd, options) => {
//     console.log(cmd, options);
//   });

// 高级定制1：自定义help信息
// program.helpInformation = function () {
//   return '';
// };
// program.on('--help', function () {
//   console.log('your help information');
// });

// 高级定制2:实现debug模式
program.on('option:debug', function () {
  if (program.opts().debug) {
    process.env.LOG_LEVEL = 'verbose';
  }
  console.log(process.env.LOG_LEVEL);
});

// 高级定制3: 对未知命令监听
program.on('command:*', function (obj) {
  console.error('未知的命令:', obj[0]);
  const availableCommmands = program.commands.map((cmd) => cmd.name());
  console.log('可用命令:', availableCommmands.join(','));
});

program.parse(process.argv);
