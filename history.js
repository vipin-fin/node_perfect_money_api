const axios = require('axios');
const csv = require('csv-parser');
const fs = require('fs');

// Define the URL with query parameters
const url = 'https://perfectmoney.com/acct/historycsv.asp?startmonth=1&startday=1&startyear=2007&endmonth=1&endday=27&endyear=2008&AccountID=10000&PassPhrase=111111';

// Make an HTTP GET request
axios.get(url)
    .then(response => {
        const lines = response.data.split('\n');
        const headers = lines[0].split(',');

        if (headers[0] !== 'Time' || headers[1] !== 'Type' || headers[2] !== 'Batch' || headers[3] !== 'Currency' || headers[4] !== 'Amount' || headers[5] !== 'Fee' || headers[6] !== 'Payer Account' || headers[7] !== 'Payee Account' || headers[8] !== 'Memo') {
            console.log('Error:', lines[0]);
        } else {
            const dataArray = [];

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');

                if (values.length !== 9) {
                    continue;
                }

                const itemNamed = {
                    Time: values[0],
                    Type: values[1],
                    Batch: values[2],
                    Currency: values[3],
                    Amount: values[4],
                    Fee: values[5],
                    'Payer Account': values[6],
                    'Payee Account': values[7],
                    Memo: values[8]
                };

                dataArray.push(itemNamed);
            }

            console.log(dataArray);
        }
    })
    .catch(error => {
        console.error('Error opening URL:', error.message);
    });
