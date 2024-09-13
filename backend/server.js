//ABqz8GyMZhI70BMz

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./Routes/CustomerRoutes");
const port = 5001;
const {MongoClient,ObjectId} = require('mongodb');
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

// const uri =
//   "mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/";

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbname ='testHotel';

const db = client.db(dbname);
const collection = db.collection('customer');

const connect = async () => {
  try {
    await mongoose.connect(url);
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
