const http = require('http');

const ip = '127.0.0.1';
const port = 1337;

const server = http.createServer(
    function(request,response){
      response.statusCode = 200 ;
      response.setHeader('Content-Type','text/plain');
      response.end('Hello World\n');
    }
);

server.listen(port, ip, function(){
  console.log('et pourtant elle tourne !');
});
