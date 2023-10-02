const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transactionId: {type: Number , required:true },
    amount: {type: Number, required: true}, 
    description: {type: String, required: true},
    date: {type: Date, required: true},
    transactionStatus: {type: String, required: true},
    userSendingName: {type: String, required: true },
    userReceivingName: {type: String, required: true },
    search: {type: [String], required: true}


});

module.exports = mongoose.model("transaction", transactionSchema);