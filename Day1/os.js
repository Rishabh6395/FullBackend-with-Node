const os = require("os")

console.log("Platform", os.platform())
console.log("User", os.userInfo())

console.log("CPU Architecture:", os.arch())

console.log("Free Memory", os.freemem(), "bytes")
console.log("Total Memory", os.totalmem())

console.log("Operating system", os.type())