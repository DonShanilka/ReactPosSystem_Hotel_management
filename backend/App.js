//ABqz8GyMZhI70BMz
// const mongoose = require("mongoose");
// const router = require("./Routes/CustomerRoutes")

const express = require('express');
const app = express();
const controller = require('./Controllers/CustomerControlle')
const cors = require('cors');


app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());


// midleware conet karanawa
// app.get("/customers",router);
// app.post('/', router);

// mongoose.connect("mongodb+srv://shanilka100:ABqz8GyMZhI70BMz@shanilka.15lsu.mongodb.net/")
//         .then(() => console.log("Connect to MongoDB"))
//         .then(() => {
// app.listen(5001);
// })
// .catch((err) => console.log((err)));


// funtion

app.get('/customers',(req,res) => {
    controller.getAllCustomer(req,res,next => {
        res.send();
    });
});

app.post('/addcustomers',(req,res) => {
    controller.addCustomer(req.body,(callback) => {
        res.send(callback);
    });
});


app.put('/updatecustomers',(req,res) => {
    controller.updateCustomer(req.body,(callback) => {
        res.send(callback);
    });
});


app.delete('/deletecustomers',(req,res) => {
    controller.deleteCustomer(req.body,(callback) => {
        res.send(callback);
    });
});



module.exports = app;