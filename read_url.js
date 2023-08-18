const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

// Step 1: URL Encode the File Path
const filePath = 'https://perfectmoney.com/acct/balance.asp?AccountID=15026118&PassPhrase=eS75705iJfWPcfvfggHQbEvug';
const encodedFilePath = encodeURIComponent(filePath);

// Step 2: Open the Encoded File URL
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error opening file:', err);
    } else {
        console.log('File contents:', data);
    }
});
