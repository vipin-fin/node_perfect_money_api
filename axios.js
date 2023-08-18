const axios = require('axios');
const crypto = require('crypto');

const accountId = '85793107';
const passphrase = '35T6n36cTBvDZMeapOAzyNhCp';
const apiName = 'account_history';


// Generate a random nonce
const nonce = Date.now();

// Construct the request data
const requestData = {
    AccountID: accountId,
    PassPhrase: passphrase,
    Nonce: nonce,
    cmd: apiName,
};

// Create a signature using SHA-256
const signature = crypto
    .createHash('sha256')
    .update(`${accountId}:${apiName}:${nonce}:${passphrase}`)
    .digest('hex');

requestData.PASS_SIGNATURE = signature;
// Specify the URL of the remote file you want to download and open
const remoteFileUrl = 'https://perfectmoney.com/acct/balance.asp?AccountID=85793107&PassPhrase=35T6n36cTBvDZMeapOAzyNhCp'; // Replace with the actual URL

// Make a POST request to the API
axios.post(remoteFileUrl)
    .then(response => {
        console.log('API Response:', response.data);
    })
    .catch(error => {
        console.error('API Error:', error);
    });
