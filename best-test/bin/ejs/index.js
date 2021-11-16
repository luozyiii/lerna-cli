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
