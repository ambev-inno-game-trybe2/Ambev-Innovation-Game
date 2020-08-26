const CryptoJS = require('crypto-js');
require('dotenv').config();

/**
 * Decrypt hashed password.
 * @namespace hashNow
 * @async
 * @method
 * @param {String} Pass - User's password to be hashed.
 * @returns {String} - Encrypted User's password
 * @throws {Object} Throw object error.
 */
const hashNow = (string) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(string), process.env.SECRET).toString();
  return ciphertext;
};

/**
 * Decrypt hashed password.
 * @namespace decryptHash
 * @async
 * @method
 * @param {Hash} HashedPw - User's hashed password
 * @returns {String} - Decrypted User's password
 * @throws {ErrorObject} Throw object error.
 */
const decryptHash = async (hash) => {
  try {
    const hashedPW = await CryptoJS.AES.decrypt(hash, process.env.SECRET);
    const originalText = hashedPW.toString(CryptoJS.enc.Utf8);
    return originalText;
  } catch (error) {
    console.log(error);
    return error;
  }
};
module.exports = { hashNow, decryptHash };
