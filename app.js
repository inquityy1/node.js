const http = require('http');

const server = http.createServer((request, response) => {
	response.setHeader('Content-Type', 'text/html');
	response.write('<form><input type="text"><button type="submit">send</button></form>');
	response.end();
});

server.listen(3000);