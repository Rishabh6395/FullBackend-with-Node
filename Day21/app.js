import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Resolve the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.send("Everything is fine");
});

app.use((req, res) => {
  // Serve the 404.html file for unknown routes
  return res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});
