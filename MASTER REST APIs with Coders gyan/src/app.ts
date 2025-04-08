
import express from 'express'
import globalErrorHandler from './middlewares/globalehandlers'

const app = express()

// Routes
// HTTP Method: GET, POST, PUT, PATCH, DELETE

app.get('/', (req, res, next) => {
    
    res.json({message: "Welcome to elib APIs"})
})

app.use(globalErrorHandler);



export default app;