var http =requires('http');
var fs = required('upper-case');
http.createServer(function(req,res){
		res.writeHead(200{'content-type':'text/html'});
		reswrite(uc.upperCase("wish u all success"));
		res.end();
		}).listen(8080);
	})