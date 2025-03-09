// Node.js FS Module (Async): How to Write, Read, Update, and Delete Files

const fs = require('fs')
const path = require('path')

const fileName = 'fsAsync.txt';
const filePath = path.join(__dirname, fileName)

// Syntax: fs.writeFile(path, data, options, callback)

// fs.writeFile(filePath, "This is the initial Data", 'utf-8', (err) => {
//     if(err) console.error(err)
//     else console.log("File has been saved")
// })

// Readfile-------
// Syntax: fs.readFile(path, options, callback)


// fs.readFile(filePath, 'utf-8', (err,data) => {
//     if(err) console.error(err)
//     else console.log(data)
// })


// Update a file-------
// Syntax: fs.appendFile(path, data, options, callback)

// fs.appendFile(filePath, '\nThis is the updated data' ,'utf-8', (err,data) => {
//     if(err) console.error(err)
//     else console.log("File has been updated")
// })


// Delete a file-------
// Syntax: fs.unlink(path, callback)

 fs.unlink(filePath, (err) => {
     if(err) console.error(err)
     else console.log("File has been deleted")
})