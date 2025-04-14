import os from 'node:os'


console.log('CPUs', os.cpus().length)
console.log('Total Memory', os.totalmem() / (1024 * 1024 * 1024)) // GB
console.log("Free Memory", os.freemem() / (1024*1024).toFixed()) // MB
console.log('Uptime', os.uptime() / (60 * 60)) // hrs
console.log("Hostname", os.hostname())
console.log("User Info", os.userInfo())
console.log("Machine", os.machine())





























// .............................................. //





// console.log(process.argv[2], process.argv[3])

// import {getGreetings} from "./greeter.js"


// // making greeting app


// const name = process.argv[2]

// const hours = new Date().getHours() // 24 hours

// getGreetings()

// const greetings = getGreetings(hours)

// console.log(`${greetings}, ${name}!`)