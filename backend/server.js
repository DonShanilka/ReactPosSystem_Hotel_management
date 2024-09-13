//ABqz8GyMZhI70BMz

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./Routes/CustomerRoutes");
const port = 5001;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log('MongoDB Error', error);         
  }
}

connect();

const server = app.listen(port, 'localhost', () => {
        console.log(`Node Server is Listening to ${server.address().port}`)
});

app.use("/api", router);
