# 基于 lerna 搭建脚手架框架

### Lerna 学习文档

- [Lerna 简介](https://github.com/luozyiii/learn-cli/blob/main/lerna-best/01-lerna.md)

- [import-local 源码解析](https://github.com/luozyiii/learn-cli/blob/main/lerna-best/03-import-local%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.md)

- [优秀的文件操作库](https://github.com/luozyiii/learn-cli/blob/main/lerna-best/04-%E4%BC%98%E7%A7%80%E7%9A%84%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C%E5%BA%93.md)

- [Node 模块加载原理](https://github.com/luozyiii/learn-cli/blob/main/lerna-best/05-Node%E6%A8%A1%E5%9D%97%E5%8A%A0%E8%BD%BD.md)

- [基于 lerna 重新设计简历](https://github.com/luozyiii/learn-cli/blob/main/lerna-best/06-%E5%9F%BA%E4%BA%8Elerna%E9%87%8D%E6%96%B0%E8%AE%BE%E8%AE%A1%E7%AE%80%E5%8E%86.md)

### 常用命令

```javascript
// 进入目录
cd lerna-best

// 安装 lerna
yarn add -D lerna

// 全局也安装一下 lerna
cnpm install -g lerna

// learn 初始化
lerna init

// 添加依赖
lerna add @leslie0403/utils
// 为指定package添加依赖
lerna add @leslie0403/utils packages/core/

// 清除依赖
lerna clean

// 重新安装依赖
lerna bootstrap

// 链接依赖
lerna link

// lerna exec 执行 shell 脚本
lerna exec -- rm -rf node_modules/
lerna exec --scope @lerna-best/utils  rm -rf node_modules/ // 指定package

// 执行 npm 命令
lerna run test
lerna run --scope @lerna-best/utils test // 指定package

// 版本
lerna version
// 查看上版本以来所有的变更
lerna changed
// 查看 diff
lerna diff
// 项目发布 后，git会打包生成tag
lerna publish

// 发布失败后 可执行
lerna publish from-git
```

#### 发布注意事项：

```javascript
// package.json 添加
"publishConfig": {
  "access": "public"
}
// 添加 LICENSE.md
```

##### 注： 在 vscode 中，执行命令后左侧目录不会马上刷新，请手动点击项目上方的刷新按钮

### npm 项目本地依赖引用方法(重点)

```javascript
// packages/core/package.json
"dependencies": {
  "@lerna-best/utils": "file:../utils"
},
// 进入 packages/core 重新npm install
cd packages/core
npm install

// 执行 bin/index.js
node packages/core/bin/index.js
```
