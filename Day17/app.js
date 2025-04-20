import express from 'express'
import {z} from 'zod'

const ageSchema = z.number().min(18).max(100).int();
const userAge = 18;

const parseUserAge = ageSchema.parse(userAge)
console.log(parseUserAge)

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`)
})