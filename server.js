// const http = require('http');
//
// const ip = '127.0.0.1';
// const port = 65534;
//
// const server = http.createServer(
//     function(request,response){
//       response.statusCode = 200 ;
//       response.setHeader('Content-Type','text/plain');
//       response.end('Hello World\n');
//     }
// );
//
// server.listen(port, ip, function(){
//   console.log('et pourtant elle tourne !');
// });
var express = require('express');

var serveur = express();
serveur.get("/",function(request,response){
  response.sendFile(__dirname + "/views/index.html");
});
serveur.get("/toto",function(request,response){
  response.send("toto");
});

serveur.listen(process.env.PORT || 1337);
