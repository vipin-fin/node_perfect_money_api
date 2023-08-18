const express = require('express');
// const bodyParser = require('body-parser');
const fs = require('fs');
const logger = require('morgan'); // Import the morgan library

const app = express();
const PORT = process.env.PORT || 3000;

// Use bodyParser middleware to parse JSON and urlencoded data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the logger middleware with the 'dev' format
app.use(logger('dev'));

// success-payment
app.post('/api/successPayment', (req, res) => {
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
            console.log('Data saved to writeData.json');
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});



// cancel-payment
app.post('/api/cancelPayment', (req, res) => {
    const data = req.body;
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
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});

// Start the server
const server = app.listen(PORT, () => {
    let running_port = server.address().port;
    console.log(`Server is running on port ${running_port}`);
});
