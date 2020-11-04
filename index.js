//server starts here
const server = require('./api/server.js');

const PORT = 9000;

server.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`);
});