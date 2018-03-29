const server = require('./app');


const PORT = process.env.PORT || 8080;
// write your code here
server.listen(PORT, function() {
    console.log('Server is listening on '+PORT);
  });