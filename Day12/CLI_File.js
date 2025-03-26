//  Create a CLI File Creation App Using Node.js
// 1. Enter the file name.
// 2. Enter the content.

import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question('Enter your filename: ', (filename) => {
        rl.question("Enter the content for your file: ", (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if(err){
                    console.error(`Error writting the file: , ${err.message}`)
                } else{
                    console.log(`File "${filename}" "Rishabh_nodejs.txt" created successfully`)
                }
                rl.close()
            })
        })
    })
}

fileCreation()