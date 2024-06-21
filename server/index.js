require('dotenv').config();

const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Database connected");
})
