const fs = require("fs")
const path = require('path')

const fileName = "test.txt"
const filepath = path.join(__dirname, fileName)

// FS Module:---------

// Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content;
// Syntax: fs.writeFileSync(filePath, data, options)
// filePath: The file path to write to.
// data: The content to write to the file.
// options: Optional. Inclueds encoding ('utf8'), mode, or flags


// console.log(__dirname)
// const writeFile = fs.writeFileSync(filepath, "This is the initial Data updated", 'utf-8');

// console.log(writeFile)

// Read data from a file---------

// Syntax: fs.readFileSync(filePath, options)
// filePath: The file path to read from.
// options: Optional. Inclueds encoding ('utf8'), mode, or flags

// const readFile = fs.readFileSync(filepath, 'utf-8')
// console.log(readFile.toString())
// console.log(readFile)


// Append data to a file-------

// Syntax: fs.appendFileSync(filePath, data, options)
// filePath: The file path to append data to.
// data: The content to append to the file.
// options: Optional. Inclueds encoding ('utf8'), mode, or flags

// const appendFile = fs.appendFileSync(filepath, "\n This is the updated Data", 'utf-8')

// console.log(appendFile)


// Delete a file-------

// Syntax: fs.unlinkSync(filePath)
// filePath: The file path to delete.

// const deleteFile = fs.unlinkSync(filepath)
// console.log(deleteFile)

// Rename a file-------

// Syntax: fs.renameSync(oldPath, newPath)
// oldPath: The file path to rename.
// newPath: The new file path.

const renameFile = fs.renameSync(filepath, "test2.txt")
console.log(renameFile)