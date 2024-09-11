const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({

    cid:{
        type:String,
        require:true,
    },
    name:{
        type:String, // dataType eka
        require:true, // input wala filwela thiyedha kiyala chek karanawa (validate eka)
    },
    age:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    }
});


// export karanwa (database ekata)
const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;