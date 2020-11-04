const express = require('express');
// const Cars = require('../data/carsModel');
const db = require('../data/dbConfig');
const router = express.Router();

//----------------------------
//  middleware validation
//----------------------------


//----------------------------
//  ENDPOINTS
//----------------------------
// BaseURL/api/cars
//----------------------------
// throw({message:"Testing Error Messsages"});

//  GET / 
//----------------------------

router.get('/',(req,res,next)=>{
  //get a list of cars from the database
  //SELECT * FROM cars
  db.select('*').from('cars')
    .then(cars =>{
      res.status(200).json({ data:cars });
    })
    .catch(err=>{
      console.log('error: ', err);
      res.status(500).json({ message: err.message });
    });
});


//  GET /:id
//----------------------------

router.get('/:id',(req,res,next)=>{
  const { id } = req.params;

  //select * from posts where id=id
  db.select('*')
    .from('cars')
    .where("id",id)
    .first()
    .then(car=>{
      res.status(200).json({ data:car });
    })
    .catch(err=>{
      console.log('error: ', err);
      res.status(500).json({ message: error.message });
    });
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

//Error handler
//----------------------------

//this doesn't work as a callback, troubleshoot
// const handleError = () => {
//   console.log('error: ', err);
//   res.status(500).json({ message: error.message });
// }


//  export
//----------------------------
module.exports = router;