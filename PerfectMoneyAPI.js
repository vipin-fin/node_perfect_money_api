const axios = require('axios');

class PerfectMoneyAPI {
    constructor(AccountID, PassPhrase) {
        this.AccountID = AccountID;
        this.PassPhrase = PassPhrase;
    }

    async getAccountName(account) {
        try {
            const response = await axios.get(`https://perfectmoney.is/acct/acc_name.asp?AccountID=${this.AccountID}&PassPhrase=${this.PassPhrase}&Account=${account}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data);
            } else {
                throw error;
            }
        }
    }

    async getAccount(account) {
        try {
            const response = await axios.get(`https://perfectmoney.is/acct/acc_name.asp`, {
                params: {
                    AccountID: this.accountID,
                    PassPhrase: this.passPhrase,
                    Account: account,
                },
            });

            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    }

    async getBalance(account = null) {
        try {
            const response = await axios.get(`https://perfectmoney.is/acct/balance.asp?AccountID=${this.AccountID}&PassPhrase=${this.PassPhrase}`);
            const data = response.data;

            // Process the data to extract balance information if needed

            if (account === null) {
                return data; // Return entire data
            } else {
                // Process and return the specific account's balance
                return data[account] || false;
            }
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data);
            } else {
                throw error;
            }
        }
    }

    async transferFund(fromAccount, toAccount, amount, paymentID = null, memo = null) {
        try {
            let url = `https://perfectmoney.is/acct/confirm.asp?AccountID=${this.AccountID}&PassPhrase=${this.PassPhrase}&Payer_Account=${fromAccount}&Payee_Account=${toAccount}&Amount=${amount}&PAY_IN=1`;

            if (paymentID) {
                url += `&PAYMENT_ID=${paymentID}`;
            }

            if (memo) {
                url += `&Memo=${memo}`;
            }

            const response = await axios.get(url);
            const data = response.data;

            // Process the data if needed

            return data;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data);
            } else {
                throw error;
            }
        }
    }

    async createEV(payerAccount, amount) {
        try {
            const response = await axios.get(`https://perfectmoney.is/acct/ev_create.asp?AccountID=${this.AccountID}&PassPhrase=${this.PassPhrase}&Payer_Account=${payerAccount}&Amount=${amount}`);
            const data = response.data;

            // Process the data if needed

            return data;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data);
            } else {
                throw error;
            }
        }
    }

    async transferEV(toAccount, EVnumber, EVactivationCode) {
        try {
            const response = await axios.get(`https://perfectmoney.is/acct/ev_activate.asp?AccountID=${this.AccountID}&PassPhrase=${this.PassPhrase}&Payee_Account=${toAccount}&ev_number=${EVnumber}&ev_code=${EVactivationCode}`);
            const data = response.data;

            // Process the data if needed

            return data;
        } catch (error) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data);
            } else {
                throw error;
            }
        }
    }
}

module.exports = PerfectMoneyAPI;
