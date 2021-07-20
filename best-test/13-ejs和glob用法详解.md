# ejs 和 glob 用法详解

## [ejs](https://ejs.bootcss.com/) 用法

### ejs 模版的三种用法

```javascript
// 安装
yarn add -D ejs

const ejs = require('ejs');
const path = require('path');

const html = '<div><%= user.name %></div>';
const options = {};
const data = {
  user: {
    name: 'leslie',
  },
};
const data2 = {
  user: {
    name: 'leslie2',
  },
};

// 第一种用法
// 返回 compile function，用于解析html中的模版
const template = ejs.compile(html, options);

const compileTemplate = template(data);
const compileTemplate2 = template(data2);
console.log(compileTemplate, compileTemplate2);

// 第二种用法
const renderTemplate = ejs.render(html, data, options);
console.log(renderTemplate);

// 第三种用法
// 3.1 Promise
const renderFile = ejs.renderFile(path.resolve(__dirname, 'template.html'), data, options);
renderFile.then((file) => console.log(file));

// 3.2
ejs.renderFile(path.resolve(__dirname, 'template.html'), data, options, (err, file) => {
  console.log(file);
});
```

### 标签含义

```
<% '脚本' 标签，用于流程控制，无输出。
<%_ 删除其前面的空格符
<%= 输出数据到模板（输出是转义 HTML 标签）
<%- 输出非转义的数据到模板
<%# 注释标签，不执行、不输出内容
<%% 输出字符串 '<%'
%> 一般结束标签
-%> 删除紧随其后的换行符
_%> 将结束标签后面的空格符删除
```

### 包含（include）

```
<%- include('./footer.html', {user: 'user'}); %>
```

### 自定义分隔符

> 可针对单个模板或全局使用自定义分隔符：

```
let ejs = require('ejs'),
    users = ['geddy', 'neil', 'alex'];

// 单个模板文件
ejs.render('<?= users.join(" | "); ?>', {users: users},
    {delimiter: '?'});
// => 'geddy | neil | alex'

// 全局
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>', {users: users});
// => 'geddy | neil | alex'
```

### 自定义文件加载器

```
let ejs = require('ejs');
let myFileLoader = function (filePath) {
  return 'myFileLoader: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoad;
```

## [glob](https://www.npmjs.com/package/glob) 用法

> 文件遍历

```javascript
// 安装
yarn add -D glob

const glob = require('glob');
glob(
  '**/*.js',
  {
    ignore: 'node_modules/**',
  },
  (err, file) => {
    console.log(err, file);
  },
);

```
