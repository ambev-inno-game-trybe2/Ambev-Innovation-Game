const CryptoJS = require('crypto-js');
require('dotenv').config();

const hashNow = (string) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(string), process.env.SECRET).toString();
  return ciphertext;
};

const decryptHash = (hash) => {
  const dec = CryptoJS.AES.decrypt(hash, process.env.SECRET);
  const decryptedData = JSON.parse(dec.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

(module.exports = hashNow), (module.exports = decryptHash);

console.log(process.env.SECRET);
console.log(hashNow('test'));
