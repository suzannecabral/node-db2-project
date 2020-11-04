const express = require('express');
const Cars = require('../data/carsModel');

const router = express.Router();

//----------------------------
//  middleware validation
//----------------------------


//----------------------------
//  ENDPOINTS
//----------------------------
// BaseURL/api/cars
//----------------------------


//  GET / 
//----------------------------

router.get('/',(req,res,next)=>{

});


//  GET /:id
//----------------------------

router.get('/:id',(req,res,next)=>{

});



//  POST /
//----------------------------

router.post('/',(req,res,next)=>{

});



//  DELETE /:id
//----------------------------

router.delete('/:id',(req,res,next)=>{

});



//  PUT /:id
//----------------------------

router.put('/:id',(req,res,next)=>{

});



//  export
//----------------------------
module.exports = router;