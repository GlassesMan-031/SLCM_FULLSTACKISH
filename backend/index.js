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

app.listen(3000, () => {
  console.log("Backend står redo på http://localhost:3000/");
});

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/cities", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM cities", []);

  response.send(rows);
});

app.get("/products", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM products", []);
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

app.get("/sales", async (_req, res) => {
  try {
    const { rows } = await client.query("SELECT * FROM sales_view");
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch sales" });
  }
});
