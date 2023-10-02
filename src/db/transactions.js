import { createTransaction} from '../db/transactions';

function create(){
   return createTransaction(['0'])
}

const cron = require('node-cron');
const shell = require('shelljs')

cron.schedule("* * * * * *", function(){

    console.log("Creating transaction!")
    create()
})