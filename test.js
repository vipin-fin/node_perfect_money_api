const PerfectMoneyAPI = require('./PerfectMoneyAPI'); // Adjust the path to the actual location of the PerfectMoneyAPI class file

const PMAccountID = '15026118';
const PMPassPhrase = 'Fin@123456789';
// const PMPassPhrase = 'eS75705iJfWPcfvfggHQbEvug';
const accountID = '85793107'; // A valid PM currency account ID that you want to get its name.

const pmapi = new PerfectMoneyAPI(PMAccountID, PMPassPhrase);




/* (async () => {
    try {
        const account = '85793107'; // A valid PM currency account ID
        const accountName = await pmapi.getAccountName(account);
        console.log("🚀 ~ file: test.js:15 ~ accountName:", accountName)
        // const accountBalance = await pmapi.getBalance();
        // console.log("🚀 ~ file: test.js:16 ~ accountBalance:", accountBalance)
        // console.log(`Account Name: ${accountName}`);

    } catch (error) {
        console.error(error.message);
    }
})();
 */

// get Balance
// (async () => {
//     try {
//         const resBalance = await pmapi.getBalance();
//         console.log(resBalance); // Output the account Balance
//     } catch (error) {
//         console.error(error.message); // Output the error message if an exception is caught
//     }
// })();



// createEV
(async () => {
    try {
        let payerAccount = '85793107';
        let amount = 10;

        const result = await pmapi.createEV(payerAccount, amount);
        console.log(result); // Output of API
    } catch (error) {
        console.error(error.message); // Output the error message if an exception is caught
    }
})();