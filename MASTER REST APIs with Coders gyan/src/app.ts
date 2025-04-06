import express from 'express'

const app = express()

// Routes
// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.get('/', (req, res, next) => {
    res.json({message: "Welcome to elib APIs"})
})


export default app;