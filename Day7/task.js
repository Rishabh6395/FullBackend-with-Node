// Challenge: "Event Maestro Handle It All"

// Objective
// Create a program using Node.js EventEmitter that:

// Listens for multiple types of user events (e.g,. login, logout, purchase and profile update)
// Tracks how many times each event is emitted.
// Logs a summary of all event occurences when a special summary event is triggered.

// Requirements:
// Create at leaset four custom events (e.g., user-login, user-logout, user-purchase, progile-update)
// Emit these event multiple times with different argurments (e.g., username, item puchased)
// Track and store the count of each event type.
// Define a summary event that logs a detailed report of how many times each event was triggered.

const EventEmitter = require("events")
const emitter = new EventEmitter()

const eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "user-logout": 0,
}

emitter.on("user-login", (username)=>{
    eventCounts["user-login"]++
    console.log(`${username} logged in!`)
})

emitter.on("user-purchase", (username, item) =>{
    eventCounts["user-purchase"]++
    console.log(`${username} purchased: ${item}`)
})

emitter.on("profile-update", (username, creds) =>{
    eventCounts["profile-update"]++
    console.log(`${username} updated their ${creds}`)
})

emitter.on("user-logout", (username)=>{
    eventCounts["user-logout"]++
    console.log(`${username} successfully logged out`)
})

emitter.on("Summary", ()=>{
    console.log(eventCounts)
})

// Emit events:
emitter.emit("user-login", "Rishabh")
emitter.emit("user-purchase", "Rishabh", "Laptop")
emitter.emit("profile-update", "Rishabh", "email")
emitter.emit("user-logout", "Rishabh")

// Emit more events to demonstrate functionality
emitter.emit("user-login", "John")
emitter.emit("user-purchase", "John", "Phone")
emitter.emit("profile-update", "John", "address")
emitter.emit("user-logout", "John")

// Show summary
emitter.emit("Summary")