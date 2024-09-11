//ABqz8GyMZhI70BMz

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


// funtion

app.get('/customers',(req,res) => {
    controller.getAllCustomer(req,res,next => {
        res.send();
    });
});

app.get('/Onecustomers',(req,res) => {
    controller.getById(req,res,next => {
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