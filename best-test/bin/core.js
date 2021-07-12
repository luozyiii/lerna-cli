/**
 * Node 支持ES Module
 * 模块化
 * CMD/AMD/require.js
 * CommonJS 加载：require() 输出:module.exports / exports.x
 * ES Module 加载:import 输出:export default / export function / export const
 */

import utils from './utils';
utils();

// babel
(async function () {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('ok');
})();
