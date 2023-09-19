const crypto = require('crypto');
const moment = require('moment');

// Create a function to generate MD5 hash
function generateMD5Hash(input) {
    const md5Hash = crypto.createHash('md5');
    md5Hash.update(input);
    return md5Hash.digest('hex');
}

let reference = "ABC-" + parseInt(new Date().getTime() / 1000);
console.log("🚀 ~ file: md5.js:11 ~ reference:", reference)


let timestamp = Math.floor(moment().format('x') / 1000);
console.log("🚀 ~ file: md5.js:15 ~ timestamp:", timestamp)

// PAYMENT_ID:PAYEE_ACCOUNT:PAYMENT_AMOUNT:PAYMENT_UNITS:PAYMENT_BATCH_NUM:PAYER_ACCOUNT:AlternateMerchantPassphraseHash:TIMESTAMPGMT
// BA-103:U40040094:0.01:USD:540185452:U45461501:35T6n36cTBvDZMeapOAzyNhCp:1694429998
// BA-103:U40040094:0.01:USD:540185452:U45461501:D7AA73CD7F8A2C0025CBAE43CF1FE29C:1694429998
// Example usage
const inputString = 'BA-103:U40040094:0.01:USD:540185452:U45461501:D7AA73CD7F8A2C0025CBAE43CF1FE29C:1694429998';
// const inputString = '35T6n36cTBvDZMeapOAzyNhCp';
const md5Hash = generateMD5Hash(inputString);
console.log(`MD5 Hash for '${inputString}': ${md5Hash}`);



