const cp = require('child_process');
const path = require('path');

// 可用于执行shell, 执行结果需要在回调函数中获取
// cp.exec('ls -al|grep node_modules', function (err, stdout, stderr) {
//   console.log(err, stdout, stderr);
// });

// cp.execFile(path.resolve(__dirname, 'test.sh'), ['-al'], function (err, stdout, stderr) {
//   console.log(err, stdout, stderr);
// });

// const child = cp.spawn(path.resolve(__dirname, 'test.sh'), ['-al'], {
//   cwd: path.resolve('..'),
// });
// // console.log(child.pid, process.pid);

// child.stdout.on('data', function (chunk) {
//   console.log('stdout', chunk.toString());
// });
// child.stderr.on('data', function (chunk) {
//   console.log('stderr', chunk.toString());
// });

/**
 * spawn: 适合耗时任务（比如：npm install），需要不断日志反馈
 * exec/execFile: 适合开销较小的任务
 */
// const child2 = cp.spawn('npm', ['install'], {
//   cwd: path.resolve('/d/my/learn-cli/best-test'),
// });
// child2.stdout.on('data', function (chunk) {
//   console.log('stdout', chunk.toString());
// });
// child2.stderr.on('data', function (chunk) {
//   console.log('stderr', chunk.toString());
// });

// fork: 会启动两个进程 Node(main) -> Node(child)
// const child3 = cp.fork(path.resolve(__dirname, 'child.js'));
// child3.send('hello child precess!!', () => {
//   // child3.disconnect();
// });
// child3.on('message', (msg) => {
//   console.log(msg);
// });
// console.log('main pid:', process.pid);

const ret = cp.execSync('ls -al|grep node_modules');
console.log(ret.toString());

const ret2 = cp.execFileSync('ls', ['-al']);
console.log(ret2.toString());

const ret3 = cp.spawnSync('ls', ['-al']);
console.log(ret3.stdout.toString());
