var express = require("express");

var server = new express();

server.get('/', function(req,res){
    res.send("hello you");
});

server.listen(8000,function(){
    console.log("Listening on port 8000.");
});