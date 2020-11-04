
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
    //pri key auto-incr
    tbl.increments();
    
    //add fields--------
    //REQUIRED:---------

    //vin
    //req, text, unique, 17 characters
    

    //make
    //req, text, 50 chars


    //model
    //req, text, 50 chars


    //mileage
    //req, integer


    //OPTIONAL----------

    //transmissionType
    //text, 50 chars


    //titleStatus
    //text, 50 chars

    
  });
};

exports.down = function(knex) {
  
};
