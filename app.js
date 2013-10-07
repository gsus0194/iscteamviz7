var express = require("express");
var fs = require('fs');
var app = express();
app.use("/app",express.static(__dirname + '/pub'));
app.get("/RetrieveTeamPerformance",function(req,res){
	res.sendfile(__dirname + "/pub/team-performance.json");
});
app.listen(3000);