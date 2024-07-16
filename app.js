const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/internship", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});
