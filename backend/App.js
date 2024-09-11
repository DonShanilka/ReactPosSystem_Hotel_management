//ABqz8GyMZhI70BMz

const express = require("express");
const mongoose = require("mongoose");
const customerRouts = require("./Routes/CustomerRoutes")

const app = express();

// midleware conet karanawa
app.use("/",customerRouts)

mongoose.connect("mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/")
.then(() => console.log("Connect to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));