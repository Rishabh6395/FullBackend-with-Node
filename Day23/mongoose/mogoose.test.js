import mongoose from "mongoose";




try {
    await mongoose.connect("mongodb://127.0.0.1/mongodb_uer")
    mongoose.set("debug", true)
} catch (error) {
    console.error(error)
    process.exit()
}

// create schema
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()}

})

// Creating a model

const Users = mongoose.model("user",userSchema);

await Users.create({name: "Rishabh", age: 22, email: "rishabhbhatt956@gmail.com"})

await mongoose.connection.close()