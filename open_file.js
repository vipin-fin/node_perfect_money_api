/* const axios = require('axios');

const remoteFileUrl = 'https://perfectmoney.com/acct/balance.asp?AccountID=85793107&PassPhrase=35T6n36cTBvDZMeapOAzyNhCp'; // Replace with the actual URL

async function checkRemoteFileStatus(url) {
    try {
        const response = await axios.head(url);

        if (response.status === 200) {
            console.log('Remote file is accessible and open.');
        } else {
            console.log('Remote file is not accessible or not open.' + response);
        }
    } catch (error) {
        console.error('>>>>>>>>>>>> Error checking remote file:', error.message);
    }
}

checkRemoteFileStatus(remoteFileUrl);
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ACCOUNT_ID = '15026118';
const ACCOUNT_PASS_PHARSE = 'eS75705iJfWPcfvfggHQbEvug';

const remoteFileUrl = 'https://perfectmoney.com/acct/balance.asp?AccountID=' + ACCOUNT_ID + '&PassPhrase=' + ACCOUNT_PASS_PHARSE;
// const remoteFileUrl = 'https://fiddle.jshell.net/robots.txt';
// const remoteFileUrl = 'https://perfectmoney.com/acct/balance.asp?AccountID=85793107&PassPhrase=35T6n36cTBvDZMeapOAzyNhCp'; // Replace with the actual URL

// Determine the file name from the URL
const fileName = path.basename(remoteFileUrl);

(async () => {
    try {
        // Make an HTTP request to download the remote file
        axios.get(remoteFileUrl, { responseType: 'arraybuffer' })
            .then(response => {
                // Write the downloaded content to a local file
                const localFilePath = path.join(__dirname, fileName);
                fs.writeFileSync(localFilePath, response.data);

                // Open the local file with the default program
                const openCommand = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
                exec(`${openCommand} "${localFilePath}"`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error opening file: ${error.message}`);
                        return;
                    }
                    console.log('File opened successfully.');
                });
            })
            .catch(error => {
                console.error(`Error downloading file: ${error.message}`);
            });
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Request completed.');
        console.log('>>> URL >>>>>:: ' + remoteFileUrl);
        // This block will be executed no matter whether the request succeeds or fails.
    }
})();

// Make an HTTP request to download the remote file
/* axios.get(remoteFileUrl, { responseType: 'arraybuffer' })
    .then(response => {
        // Write the downloaded content to a local file
        const localFilePath = path.join(__dirname, fileName);
        fs.writeFileSync(localFilePath, response.data);

        // Open the local file with the default program
        const openCommand = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
        exec(`${openCommand} "${localFilePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error opening file: ${error.message}`);
                return;
            }
            console.log('File opened successfully.');
        });
    })
    .catch(error => {
        console.error(`Error downloading file: ${error.message}`);
    });
 */