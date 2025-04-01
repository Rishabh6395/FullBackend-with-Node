// Serving HTML & CSS File in Node

import { readFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';

const PORT = 3000;

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
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});