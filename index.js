const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.listen(5000);