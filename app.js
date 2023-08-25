

const PerfectMoneyAPI = require('./PerfectMoneyAPI'); // Adjust the path to the actual location of the PerfectMoneyAPI class file

const PMAccountID = '15026118';
const PMPassPhrase = 'Fin@123456789';
// const PMPassPhrase = 'eS75705iJfWPcfvfggHQbEvug';
const accountID = '85793107'; // A valid PM currency account ID that you want to get its name.

const pmapi = new PerfectMoneyAPI(PMAccountID, PMPassPhrase);

const port = 3000;

const express = require('express');
const app = express();

app.use(express.json());


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


const server = app.listen(port, () => {
    let port = server.address().port;
    console.log(`Server running on http://localhost:${port}`);
});


