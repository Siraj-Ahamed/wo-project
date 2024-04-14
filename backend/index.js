const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Database.");
        app.listen(3000, () => {
            console.log("Server is lisening on port 3000");
        });
    })
    .catch((err) => {
        console.log("Connecion failed");
        console.log("Connecion ERROR:", err);
    });
