const PerfectMoneyAPI = require('./PerfectMoneyAPI'); // Adjust the path to the actual location of the PerfectMoneyAPI class file

const PMAccountID = '15026118';
const PMPassPhrase = 'eS75705iJfWPcfvfggHQbEvug';
const accountID = 'U123456'; // A valid PM currency account ID that you want to get its name.

const pmapi = new PerfectMoneyAPI(PMAccountID, PMPassPhrase);


(async () => {
    try {
        const account = 'U123456'; // A valid PM currency account ID
        const accountName = await pmapi.getAccountName(account);
        console.log(`Account Name: ${accountName}`);
    } catch (error) {
        console.error(error.message);
    }
})();
/* (async () => {
    try {
        const PMname = await pmapi.getAccountName(accountID);
        console.log(PMname); // Output the account name
    } catch (error) {
        console.error(error.message); // Output the error message if an exception is caught
    }
})(); */