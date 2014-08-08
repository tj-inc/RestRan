var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response){
	response.writeHead(200);
	var url = request.url;
	url = (url == "/") ? "./index.html" : "." + url;
	console.log(url);
	var prep = fs.createReadStream(url);
	prep.pipe(response);
}).listen(8000);

console.log("server is running on 8000!");