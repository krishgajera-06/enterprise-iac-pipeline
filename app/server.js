require("dotenv").config();
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});