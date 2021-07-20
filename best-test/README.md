### 脚手架学习文档

- [站在前端研发的视角，分析开发脚手架的必要性](https://github.com/luozyiii/learn-cli/blob/main/best-test/01-%E7%AB%99%E5%9C%A8%E5%89%8D%E7%AB%AF%E7%A0%94%E5%8F%91%E7%9A%84%E8%A7%86%E8%A7%92%EF%BC%8C%E5%88%86%E6%9E%90%E5%BC%80%E5%8F%91%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9A%84%E5%BF%85%E8%A6%81%E6%80%A7.md)

- [从使用角度理解什么是脚手架?](https://github.com/luozyiii/learn-cli/blob/main/best-test/02-%E4%BB%8E%E4%BD%BF%E7%94%A8%E8%A7%92%E5%BA%A6%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E6%98%AF%E8%84%9A%E6%89%8B%E6%9E%B6.md)

- [脚手架的实现原理](https://github.com/luozyiii/learn-cli/blob/main/best-test/03-%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.md)

- [脚手架的开发流程](https://github.com/luozyiii/learn-cli/blob/main/best-test/04-%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9A%84%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.md)

- [脚手架框架 yargs 快速入门](https://github.com/luozyiii/learn-cli/blob/main/best-test/05-%E8%84%9A%E6%89%8B%E6%9E%B6%E6%A1%86%E6%9E%B6yargs%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md)

- [javascript 事件循环-EventLoop](https://github.com/luozyiii/learn-cli/blob/main/best-test/06-javascript%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.md)

- [完整的 node.js 命令行解决方案(commander.js)](https://github.com/luozyiii/learn-cli/blob/main/best-test/07-commander%E5%AE%8C%E6%95%B4%E7%9A%84%20node.js%20%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md)

- [Node 项目如何支持 ES Module](https://github.com/luozyiii/learn-cli/blob/main/best-test/08-Node%20%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%20ES%20Module.md)

- [Node 多进程开发入门](https://github.com/luozyiii/learn-cli/blob/main/best-test/09-Node%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8.md)

- [Node 多进程开发进阶](https://github.com/luozyiii/learn-cli/blob/main/best-test/10-Node%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%BC%80%E5%8F%91%E8%BF%9B%E9%98%B6.md)

- [inquirer 基本用法和常用属性入门](https://github.com/luozyiii/learn-cli/blob/main/best-test/11-inquirer%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%E5%92%8C%E5%B8%B8%E7%94%A8%E5%B1%9E%E6%80%A7%E5%85%A5%E9%97%A8.md)

- [inquirer 命令行交互原理](https://github.com/luozyiii/learn-cli/blob/main/best-test/12-inquirer%E5%91%BD%E4%BB%A4%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%8E%9F%E7%90%86.md)

### 原生开发脚手架-简单入门(best-test)

目录 /best-test

```javascript
cd best-test
yarn init -y

// package.json 增加bin 命令
"bin": {
  "best-test": "bin/index.js"
},
```

bin/index.js

```javascript
#!/usr/bin/env node

// 注册一个命令 best-test init 和 best-test init --name
let commandList = {
  init: (option, param) => {
    console.log(`执行init流程:${option}=${param}`);
  },
};
const argv = require('process').argv;
const command = argv[2]; // 接收第二个参数
const options = argv.slice(3); // options
if (options.length > 1) {
  let [option, param] = options;
  option = option.replace('--', '');

  if (command) {
    if (commandList[command]) {
      commandList[command](option, param);
    } else {
      console.log('请输入正确的命令');
    }
  } else {
    console.log('请输入命令');
  }
}

// 实现参数解析 --version 和 -V
if (command && (command.startsWith('--') || command.startsWith('-'))) {
  const globalOption = command.replace(/--|-/g, '');
  if (globalOption === 'version' || globalOption === 'V') {
    console.log('1.0.0');
  }
}
console.log('best-test');
```

### 发布 npm

```javascript
// 获取当前npm包镜像地址
npm get registry

// 设置回官方地址
npm config set registry https://registry.npmjs.org/

// 设置淘宝镜像地址
npm config set registry http://registry.npm.taobao.org/

// 登录
npm login

// 发布包
npm publish

// 发布私有域的包
npm publish --access=public

// 24小时内可撤销包；删除已在 npm 发布的同名包，需要在24小时后才能重新发布
npm unpublish --force
```

### 脚手架本地调试

````javascript
// 源npm包安装到本地;在工具库根目录执行
yarn link
// 在npm目录下卸载
yarn unlink

// 在项目中使用 npm 包
yarn link "@leslie0403/best-test"
// 在项目中卸载 npm 包
yarn unlink "@leslie0403/best-test"

### 全局安装执行

```javascript
npm install -g @leslie0403/best-test
best-test
````
