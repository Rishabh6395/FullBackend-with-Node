// Build a Real Time Currency Converter App in Node.js

import https from 'https'
import chalk from 'chalk'
import readline from 'readline'

const apikey = 'dfec60e42fe50e1dc922148d'
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
}

https.get(url, (response) =>{
    let data = ""
    response.on('data', (chunk) => {
        data += chunk;
    })

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g, INR, USD, JPY) :', (currency) => {
                const rate = rates[currency.toUpperCase()]
                if(rate){
                    console.log(chalk.blue.bgCyan.bold(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`))
                }
                else{
                    console.log("Invalid currency code!!")
                }
                rl.close()
            })
        })  
    })
})