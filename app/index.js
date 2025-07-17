// app/index.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");

// routers - converted to ES module imports
const airtimeRouter = require("./api/airtime/route.js");
const dataRouter = require("./api/data/route.js");
const tvRouter = require("./api/tv/route.js");

// connect database - converted to ES module import
const connectDB = require("../db/index.js");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

app.use("/api/airtime", airtimeRouter);
app.use("/api/data", dataRouter);
app.use("/api/tv", tvRouter);

app.get("/", (_req, res) => res.send("Backend API is live 🚀"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));