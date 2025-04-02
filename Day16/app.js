// Serving HTML & CSS File in Node

import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';
import crypto from 'crypto'

const PORT = 3000;
const DATA_FILE = path.join("data", 'links.json')

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-type': contentType });
        res.end(data); // Send the file content
    } catch (error) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end("404 page not found"); // Send 404 error if file not found
    }
};

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, 'utf-8')
        return json.parse(data)
    } catch (error) {
        if(error.code === "ENOENT"){
            await writeFile(DATA_FILE, JSON.stringify({}))
            return {};
        }
        throw error;
    }
}

const server = createServer(async (req, res) => {
    console.log(req.url);
    if (req.method === 'GET') {
        if (req.url === '/') {
            // Serve the HTML file
            return serveFile(res, path.join("public", "index.html"), 'text/html');
        } else if (req.url === '/style.css') {
            // Serve the CSS file
            return serveFile(res, path.join("public", "style.css"), 'text/css');
        } else {
            // Handle unknown routes
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.end("404 page not found");
        }
    } else {
        res.writeHead(405, { 'Content-type': 'text/plain' });
        res.end("Method not allowed");
    }

    if(req.method === "POST" && req.url === "/shorten"){

        const link = await loadLinks()

        const body = ""
        req.on("data", (chunk) => {
            body = body + chunk;
        })
        req.on('end', () => {
            console.log(body)
            const {url, shortCode} = JSON.parse(body)

            if(!url){
                res.writeHead(400, {"Content-Type": "text/plain"})
                return res.end("URL is required")
            }
            const findShortCode = shortCode || crypto.randomBytes(4).toString("hex")

        })
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});