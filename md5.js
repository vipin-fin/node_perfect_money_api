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

let PAYMENT_ID = '20079-1705060053';
let PAYEE_ACCOUNT = 'U42541229';
let PAYMENT_AMOUNT = '0.1';
let PAYMENT_UNITS = 'USD';
let PAYMENT_BATCH_NUM = '563651604';
let PAYER_ACCOUNT = 'U45461501';
let AlternateMerchantPassphraseHash = 'E4815FLkE6HhacquHhWuRHDnP';  // This should be Md5 value of original AltPassphrase
let TIMESTAMPGMT = '1705059816';
// PAYMENT_ID:PAYEE_ACCOUNT:PAYMENT_AMOUNT:PAYMENT_UNITS:PAYMENT_BATCH_NUM:PAYER_ACCOUNT:AlternateMerchantPassphraseHash:TIMESTAMPGMT
// BA-103:U40040094:0.01:USD:540185452:U45461501:35T6n36cTBvDZMeapOAzyNhCp:1694429998

// Example usage
AlternateMerchantPassphraseHash = generateMD5Hash(AlternateMerchantPassphraseHash).toUpperCase();
console.log("==>>>==>>>==vk==>>> ~ file: md5.js:31 ~ AlternateMerchantPassphraseHash~", AlternateMerchantPassphraseHash)

let inputString = PAYMENT_ID + ':' + PAYEE_ACCOUNT + ':' + PAYMENT_AMOUNT + ':' + PAYMENT_UNITS + ':' + PAYMENT_BATCH_NUM + ':' + PAYER_ACCOUNT + ':' + AlternateMerchantPassphraseHash + ':' + TIMESTAMPGMT;
console.log("==>>>==>>>==vk==>>> ~ file: md5.js:32 ~ inputString~", inputString)

// inputString = '20079-1705060053:U42541229:0.1:USD:563651604:U45461501:7C3C95C8B34D40AAC5CAB38CFD8A3031:1705059816'

// {"PAYEE_ACCOUNT":"U42541229","PAYMENT_ID":"20079-1705060053","PAYMENT_AMOUNT":"0.1","PAYMENT_UNITS":"USD","PAYMENT_BATCH_NUM":"563651604","PAYER_ACCOUNT":"U45461501","TIMESTAMPGMT":"1705059816","V2_HASH":"A9BD236257A4430F25A04215C31CDB7B","BAGGAGE_FIELDS":""}

const md5Hash = generateMD5Hash(inputString).toUpperCase();
console.log(`MD5 Hash for '${inputString}': ${md5Hash}`);



