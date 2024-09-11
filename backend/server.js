//ABqz8GyMZhI70BMz

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require('./Routes/CustomerRoutes')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/")
        .then(() => console.log("Connect to MongoDB"))
        .then(() => {
app.listen(5001);
})
.catch((err) => console.log((err)));

app.use('/api', router);