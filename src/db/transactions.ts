import { Transaction } from 'mongodb/src/transactions';
import mongoose from "mongoose";


const TransactionSchema = new mongoose.Schema({
    transactionId: {type: String, required: true},
    amount:{ type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    transactionStatus: {type: String, require: true},
    userSendingName: {type : String, required: true},
    userReceivingName : {type: String, required: true},

    Search: {
        transactionCriteria: {type: String, require: true, select: false},
        sessionToken: {type: String, select: false},
    },


});

export const TransactionModel = mongoose.model('Transaction', TransactionSchema);

export const getTransactions = () => TransactionModel.find();
export const getTransactionByTransactionId = (id: string) => TransactionModel.findOne({id});
export const getTransactionByCriteria = (criteria : string) =>TransactionModel.findById(criteria);

export const createTransaction = (values: Record<string, any>) => new TransactionModel(values).save().then((transaction)=> transaction.toObject());

export const createSummary = (id:string) => TransactionModel.findById(id);
export const totalTransactionAmount = (id:string) => TransactionModel.findById(id);
