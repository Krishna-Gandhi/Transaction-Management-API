
import express from 'express';

import {getAllTransactions} from '../controllers/transactions';
import { isAuthenticated, isOwner} from '../middlewares';

export default (router: express.Router )=> {
    router.get('/users',isAuthenticated, getAllUsers);
    router.delete('/users/:id',isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};

