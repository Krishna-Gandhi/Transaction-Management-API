import { Transaction } from './../../node_modules/mongodb/src/transactions';
import { getTransactionByTransactionId } from '../db/transactions';

import express from 'express';
import { getTransactions, getTransactionByTransactionId, getTransactionByCriteria, createTransaction,createSummary,totalTransactionAmount } from '../db/transactions';

export const getAllTransactions = async(req: express.Request, res: express.Response) => {
    try{

        const transactions = await getTransactions();
        return res.status(200).json(transactions);

    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getTransactionById = async(req: express.Request, res: express.Response) => {
    try{

        const {id} = req.params;
        if (!id) {
            return res.sendStatus(400);
        }
        const {transactions} = getTransactionByTransactionId();
        const transactions = await getTransactions();
        return res.status(200).json(transactions);

    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
};