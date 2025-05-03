import {MongoClient} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1")
await client.connect()

const db = client.db("mongodb_nodejs_db")
const userCollection = db.collection("user")

userCollection.insertOne({name: "Rishabh Bhatt", age: 31})