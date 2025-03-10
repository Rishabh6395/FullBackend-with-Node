// Node.js FS Module with Promises: Write, Read, Update & Delete Files 

const fs = require("fs").promises;
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.

// const file = __dirname

// fs.readdir(file)
// .then((data) => console.log(data))
// .catch((err) => console.error(err))

// const fileName1 = __dirname

// fs.readdir(fileName1)
// .then((data) => console.log(data))
// .catch((err) => console.error(err))

// Write a file-------
// Syntax: fs.writeFile(path, data, options)

// fs.writeFile(filePath, "This is the initial Data", 'utf-8')
// .then(() => console.log("File has been saved"))
// .catch((err) => console.error(err));

// Readfile-------
// Syntax: fs.readFile(path, options)

// fs.readFile(filePath, 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.error(err))

// Update a file------- 
// Syntax: fs.appendFile(path, data, options)

fs.appendFile(filePath, '\nThis is the updated data' ,'utf-8')
.then(() => console.log("File has been updated"))
.catch((err) => console.error(err))

// Delete a file-------
// Syntax: fs.unlink(path)

// fs.unlink(filePath)
// .then(() => console.log("File has been deleted"))
// .catch((err) => console.error(err))
