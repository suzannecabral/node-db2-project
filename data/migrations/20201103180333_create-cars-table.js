
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
    //pri key auto-incr
    tbl.increments();
    
    //add fields--------
    //REQUIRED:---------

    //vin
    //req, text, unique, 17 characters
    tbl.integer('vin', 17)
      .notNullable()
      .unique();

    //make
    //req, text, 50 chars
    tbl.text('make', 50)
      .notNullable();

    //model
    //req, text, 50 chars
    tbl.text('model', 50)
      .notNullable();

    //mileage
    //req, integer
    tbl.integer('mileage')
      .notNullable();


    //OPTIONAL----------

    //transmissionType
    //text, 50 chars
    tbl.text('transmissionType', 50);

    //titleStatus
    //text, 50 chars
    tbl.text('titleStatus', 50);


  });
};

exports.down = function(knex) {
  //take out all changes above
  return knex.schema.dropTableIfExists('cars');
};
