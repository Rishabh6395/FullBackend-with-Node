import express from 'express'
import path from 'path'
// import PORT from './env.js'

const PORT  = 3000;

const app = express()
// console.log(__dirname)
// console.log(__filename)

app.get("/", (req, res) => {
    // console.log(import.meta.url)
    // res.send("Hi")

    const homePagePath = path.join(import.meta.dirname, "public", "index.html")

    res.sendFile(homePagePath)
})

app.listen(PORT, () => {
    console.log(`Server starting on PORT: ${PORT}`)
})