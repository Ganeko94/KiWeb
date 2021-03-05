const http = require('http');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Ganeko!');
  //res.redirect('login.html');

  //var filePath = path.resolve('./login.html');
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  //fs.createReadStream(filePath).pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});