// import express:
const express = require('express');
const carsRouter= require('../cars/carsRouter');

//new server-----------------
const server = express();


//---------------------------
//  define server middleware
//---------------------------
//my default logger function
const logger = (req,res,next) => {
    const ts = new Date();

    console.log(`-------------------`);
    console.log(`[${ts.toLocaleTimeString()}] Server Request: `);
    console.log(`${req.method} ${req.url}`);
    console.log(`-------------------`);
    next();
}

//---------------------------
//  invoke middleware
//---------------------------
server.use(express.json());
server.use(logger);


//---------------------------
//  invoke routers
//---------------------------

server.use('/api/cars', carsRouter);


//---------------------------
//  default response
//---------------------------
server.get('/', (req,res)=>{
    res.status(200).json({message:`Server is running, better go catch it`})
});

server.get('/api', (req,res)=>{
    res.status(200).json({message:`Welcome to the api, please use an endpoint`});
});


//---------------------------
//  export server
//---------------------------
module.exports = server;