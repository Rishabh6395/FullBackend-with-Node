// HTTP Module in Node JS

const http = require("http")

// const server is like a emitter
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("<h1>Hello there, rishabh this side</h1>")
        res.end()
    }

    else if(req.url === "/code"){
        res.write("hello coding part")
        res.end()
    }
    else if(req.url === "/contact"){
        res.setHeader("Content-Type", "text/plain")
        res.write("Contact us")
        res.end()
    }
});

// web server;



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listneing on PORT ${PORT}`)
})


