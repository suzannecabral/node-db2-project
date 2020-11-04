const express = require('express');
// const Cars = require('../data/carsModel');
const db = require('../data/dbConfig');
const router = express.Router();

//----------------------------
//  middleware validation
//----------------------------
const validCarId = (req, res, next) => {
  const {id} = req.params;
  
  //lookup item by id, use DB helper method
  //returns a promise
  //resolves to 1 object from db or none
  router.get(id)
      .then(data=>{
          //if there is data returned
          if(data){
              //then it passes the check, continue
              req.car= data;
              next();
          }else{
          //no matching object, not found
              res.status(404).json({message:`No car found with id: ${id}`});
          }
      })
      .catch(err=>{
          console.log(err);
          res.status(500).json({message:`Server error validating car ID`});
      })
};

//validate input
//req:

//   vin      txt (17)
//   make     txt (50)
//   model    txt (50)
//   mileage  num (any)

const validCarInput= (req, res, next) => {
  //there is a body to the message
  if(Object.keys(req.body).length>0){

    //all req fields are present
    if(req.body.vin && req.body.make && req.body.model && req.body.mileage){
      next();
      console.log("Car input validated");
    }else{
      // /* required data field is missing */
      res.status(400).json({message:`Required fields: vin, make, model, mileage`});
    }
      //body contains both column1 and column
      //also check for foreign key in this block if needed
      // if(req.body.column1 && req.body.column2){
      //     //for testing:
      //     //res.status(200).json({message:`Item input validated`});
      //     //passes the check, continue
      //     next();
      // }else{
      //     res.status(400).json({message:`column1 and column2 are required`});
      // }
  }else{
      res.status(400).json({message:`No car information provided`});
  }
}


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

router.get('/:id', validCarId ,(req,res,next)=>{
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
      res.status(500).json({ message: err.message });
    });
});



//  POST /
//----------------------------

router.post('/', validCarInput, (req,res,next)=>{

  const carData = req.body;

  //need validation

  db('cars')
    .insert(carData)
    .then(car => {
      //returns id of newly created entry
      res.status(200).json({ data:car });
    })
    .catch(err=>{
      console.log('error: ', err);
      res.status(500).json({ message: err.message });
    });
 
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