const express = require("express"),
  path = require("path");

const app = express();
const dotenv = require("dotenv"),
  { Client } = require("pg");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

app.use(express.static(path.join(path.resolve(), "dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

const client = new Client({
  connectionString: process.env.PGURI,
  ssl: { rejectUnauthorized: false },
});

client.connect();

app.get("/api/cities", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM cities", []);
  response.send(rows);
});

app.get("/api/products", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM products", []);
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

app.get("/api/sales", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM sales_view");
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch sales" });
  }
});
