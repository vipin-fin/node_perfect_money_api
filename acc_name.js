const https = require('https');

// Define the URL and parameters
const url = 'https://perfectmoney.com/acct/acc_name.asp?AccountID=40516407&PassPhrase=Fxview@123&Account=U45461501';

// Make an HTTP GET request
https.get(url, (response) => {
    let data = '';

    // Handle data received
    response.on('data', (chunk) => {
        data += chunk;
    });

    // Handle the end of the request
    response.on('end', () => {
        console.log(data); // Print the response data
    });

    // Handle errors
    response.on('error', (error) => {
        console.error('Error:', error);
    });
});


const currentTimestampGMT = Math.floor(new Date().getTime() / 1000);
console.log(currentTimestampGMT);
