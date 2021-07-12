import { utils } from './utils.mjs';
utils();

// babel
(async function () {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('ok');
})();
