const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { Client } = require("pg");

dotenv.config();

const app = express();

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// API routes
app.get("/api", (_req, res) => {
  res.send({ hello: "World" });
});

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/cities", async (_req, res) => {
  const { rows } = await client.query("SELECT * FROM cities");
  res.send(rows);
});

// Catch-all route to send index.html for frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
