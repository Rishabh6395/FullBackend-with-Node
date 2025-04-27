// query Parameters in express

import express from "express"

const app = express()
const PORT = 3000;

app.get("/product",  (req, res) => {
    console.log(req.query);
    res.send(`<h1>user search for ${req.query.search} and limit is: ${req.query.limit} </h1>`)
})

app.get("/", (req, res) => {
    res.send("Hello there everything is fine!!")
})

app.listen(PORT, () => {
    console.log(`Server is listing at: ${PORT}`)
})