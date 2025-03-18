// Node.js Event Emitters:

const EventEmitter = require("events");
// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define an event listener
// emitter.on("greet", () => {
//     console.log("Hello, world!");
// })

// emitter.emit("greet");

// emitter.on("greet", (username) => {
//     console.log(`Hello ${username} `);
// })

// emitter.emit("greet", "John Doe");


emitter.on("greet", (args) => {
    console.log(`Hello ${args.username}, you are a ${args.role} `);
})

emitter.emit("greet", {username:"John Doe", role:"Admin"});
