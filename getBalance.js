const axios = require('axios');
const cheerio = require('cheerio');
const ACCOUNT_ID = '85793107';
const ACCOUNT_PASS_PHARSE = '35T6n36cTBvDZMeapOAzyNhCp';
// Define the URL with query parameters
const url = 'https://perfectmoney.com/acct/balance.asp?AccountID=' + ACCOUNT_ID + '&PassPhrase=' + ACCOUNT_PASS_PHARSE;

// Make an HTTP GET request
axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const hiddenFields = $('input[type="hidden"]');
        const data = {};

        hiddenFields.each((index, element) => {
            const name = $(element).attr('name');
            const value = $(element).attr('value');
            data[name] = value;
        });

        console.log(data);
    })
    .catch(error => {
        console.error('Error opening URL:', error.message);
    });
