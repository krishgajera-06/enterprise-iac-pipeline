const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Enterprise IaC Pipeline");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        version: "1.0.0"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});