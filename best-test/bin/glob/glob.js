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
