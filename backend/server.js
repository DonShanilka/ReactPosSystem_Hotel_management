
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./Routes/CustomerRoutes");
const port = 5001;
const { MongoClient } = require('mongodb')

app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017';
// "mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/";
const dbName = 'HotelDB';


const client = new MongoClient(url)

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log('MongoDB Error', error);
  }
}

const db = client.db(dbName);
var collectionName = db.collection('test1');

connect();

const server = app.listen(port, 'localhost', () => {
  console.log(`Node Server is Listening to ${server.address().port}`)
});

app.use("/api", router);

exports.collectionName = collectionName;