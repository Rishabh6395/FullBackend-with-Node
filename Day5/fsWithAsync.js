const fs = require("fs/promises");
const path = require("path");

const filename = "asyncFile.txt";
const filePath = path.join(__dirname, filename);
const filePath1 = __dirname;

// Method 1: Using Promises
fs.readdir(filePath1)
  .then((data) => console.log("Files in directory:", data))
  .catch((err) => console.error("Error reading directory:", err));

// Method 2: Using Async/Await
const readFolder = async () => {
  try {
    const res = await fs.readdir(filePath1);
    console.log("Files in directory (async/await):", res);
  } catch (error) {
    console.error("Error reading directory (async/await):", error);
  }
};

readFolder();

// const writeFileExample = async () => {
//   try {
//     await fs.writeFile(filePath, "This is a new file, please wait", "utf-8");
//     console.log("File created successfully");
//   } catch (error) {
//     console.error("Error writing file:", error);
//   }
// };

// writeFileExample();

// const readFileExample = async () => {
//   try {
//     const data = await fs.readFile(filePath,  "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error("Error writing file:", error);
//   }
// };

// readFileExample();


const appendFileExample = async () => {
  try {
    const data = await fs.appendFile(filePath, "\nThis is the new data",  "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

appendFileExample();
