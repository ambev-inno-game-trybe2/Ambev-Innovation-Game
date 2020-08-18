const hash = require('./hash');
require('dotenv').config();
console.log('secret:' + process.env.SECRET);
console.log('hash:' + hash.hashNow('justatest'));
console.log('lol');
