// require deployd
var deployd = require('deployd');
 
var port=2404;
// configure database etc. 
var server = deployd({
  port: process.env.PORT || port,
  env: process.env.ENV || 'development',
  db: {
    connectionString: 'mongodb://localhost:27017/MarsCMSDB'
  }
});
 
// start the server
server.listen();

process.on('uncaughtException', function (err) {
    fs.writeFile("test.txt",  err, "utf8");    
})
 
// debug
server.on('listening', function() {
  console.log("Server is listening on port: " + (process.env.PORT || port));
});
 
// Deployd requires this
server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});