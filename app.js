

const PerfectMoneyAPI = require('./PerfectMoneyAPI'); // Adjust the path to the actual location of the PerfectMoneyAPI class file

const PMAccountID = '15026118';
const PMPassPhrase = 'Fin@123456789';
// const PMPassPhrase = 'eS75705iJfWPcfvfggHQbEvug';
const accountID = '85793107'; // A valid PM currency account ID that you want to get its name.

const pmapi = new PerfectMoneyAPI(PMAccountID, PMPassPhrase);

const port = 3000;

// const bodyParser = require('body-parser');
const fs = require('fs');
const logger = require('morgan'); // Import the morgan library


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the logger middleware with the 'dev' format
app.use(logger('dev'));

// Route definitions
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/checkBalance', async (req, res) => {
    try {
        const data = req.body;
        let pmapi = new PerfectMoneyAPI(data.AccountID, data.PassPhrase);
        const resBalance = await pmapi.getBalance();
        console.log(resBalance); // Output the account Balance
        res.json({ sucess: true, message: 'Data received successfully!', resBalance });
    } catch (error) {
        console.log("🚀 ~ file: app.js:30 ~ app.post ~ error:", error.message)
        res.json({ sucess: false, message: error.message });
    }

});


// success-payment
app.post('/api/v1/successPayment', (req, res) => {
    const data = req.body;
    let fileName = 'successData.json';
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Write the data to a file named "postData.json"
    fs.writeFile(fileName, jsonData, (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
            res.status(500).json({ error: 'An error occurred while saving data' });
        } else {
            console.log('Data saved to ' + fileName);
            res.status(200).json({ message: 'Data saved successfully in ' + fileName });
        }
    });
});



// cancel-payment
app.post('/api/v1/cancelPayment', (req, res) => {
    const data = req.body;
    console.log("🚀 ~ file: app.js:71 ~ app.post ~ data:", data)
    let fileName = 'cancelData.json';
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Write the data to a file named "postData.json"
    fs.writeFile(fileName, jsonData, (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
            res.status(500).json({ error: 'An error occurred while saving data' });
        } else {
            console.log('Data saved to postData.json');
            res.status(200).json({ message: 'Data saved successfully in ' + fileName });
        }
    });
});

// paymentUrl
app.post('/api/v1/paymentUrl', (req, res) => {
    const data = req.body;
    let fileName = 'paymentUrlData.json';
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Write the data to a file named "postData.json"
    fs.writeFile(fileName, jsonData, (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
            res.status(500).json({ error: 'An error occurred while saving data' });
        } else {
            console.log('Data saved to postData.json');
            res.status(200).json({ message: 'Data saved successfully in ' + fileName });
        }
    });
});

// paymentUrl
app.get('/api/v1/paymentUrl', (req, res) => {
    const data = req.query; // this will collect all params send in GET request

    let fileName = 'paymentUrlData_getRequest.json';
    
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Write the data to a file named "postData.json"
    fs.writeFile(fileName, jsonData, (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
            res.status(500).json({ error: 'An error occurred while saving data' });
        } else {
            console.log('Data saved to postData.json');
            res.status(200).json({ message: 'Data saved successfully in ' + fileName });
        }
    });
});

const server = app.listen(port, () => {
    let port = server.address().port;
    console.log(`Server running on http://localhost:${port}`);
});


