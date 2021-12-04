const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/PokerDB", () => { console.log("Connected to PokerDB") }, e => console.error(e))

app.use("/", require("./routes/playerRoutes"))

app.listen(3500, function() {
  console.log("express server is running on port 3500");
})