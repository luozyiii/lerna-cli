# Node 项目如何支持 ES Module

```javascript
/**
 * Node 支持ES Module
 * 模块化
 * CMD/AMD/require.js
 * CommonJS 加载：require() 输出:module.exports / exports.x
 * ES Module 加载:import 输出:export default / export function / export const
 */
```

### 通过 webpack 完成 ES Module 资源构建

```javascript
// 安装
yarn add -D webpack webpack-cli

// webpack.config.js
const path = require('path');
module.exports = {
  entry: './bin/core.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'core.js',
  },
  mode: 'development',
  target: 'node',
};

// package.json
"scripts": {
  "build": "webpack",
  "dev": "webpack -w"
},
```

- webpack loader 配置 babel loader 支持低版本 node

```javascript
// 安装
yarn add -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime-corejs3

// webpack.config.js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|dist)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: 3,
                regenerator: true,
                useESModules: true,
                helpers: true,
              },
            ],
          ],
        },
      },
    },
  ],
},
```

### 通过 Node 原生支持 ES Module

- 后缀名必须是 .mjs

- 执行命令

```javascript
// node 14版本之前
node --experimental-modules bin/index.mjs

// node 14版本之后
node bin/index.mjs
```
