import express from 'express'

const PORT = 3000

const app = express()

app.get("/profile/:username", (req,res)=>{
    console.log(req.params)
    res.send(`<h1>Hey there ${req.params.username} </h1>`)
})


app.get("/profile/:username/article/:slug", (req,res)=>{
    console.log(req.params)
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1>Article ${req.params.username} by ${formatedSlug} </h1>`)
})

app.get("/", (req, res)=>{
    res.send("Heloo")
})

app.listen(PORT, () =>{
    console.log(`Server is listing at: ${PORT}`)
})