const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const radius = queryObject.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('error: masukkan nilai radius parameter.\n\nNama: Try Setiawan Iksan\nNIM:210211060199\nTIK1032-D;`');
  } else {
    const area = Math.PI * radius ** 2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`luas lingkaran dengan radius ${radius} yaitu ${area}.\n\nNama: Try Setiawan Iksan\nNIM:210211060199\nTIK1032-D;`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});