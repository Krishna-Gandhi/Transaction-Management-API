
const cron = require('node-cron');
const shell = require('shelljs')

cron.schedule("* * * * * *", function(){
    console.log("node.js script running")
})
//CORE MODULES
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');


//USER DEFINED MODULES
const  replaceHtml = require('./Modules/replaceHtml');
const user = require('./Modules/user');
const { Socket } = require('dgram');


const html = fs.readFileSync('./Template/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('./t.json', 'utf-8'))
let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');


console.log('Program has started')


    setTimeout(() => {
        console.log('Timer callback executed')
    }, 0);

   
    setImmediate(() => {console.log('SetImmediate callback executed')});

    process.nextTick(() => {console.log('Process.nextTick callback executed')})

console.log('Program has completed')