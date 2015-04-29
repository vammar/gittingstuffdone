var express = require("express");

var server = express()
server.get("/", function(req, resp) {
	resp.send("happy time!");
})
server.listen(8080, function() {
	console.log("server started");
});
