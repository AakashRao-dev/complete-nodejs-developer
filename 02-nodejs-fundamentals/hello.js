// const mission = process.argv[2];

// if (mission === 'learn') {
//   console.log('Time to write some node code!');
// } else {
//   console.log(`Is ${mission} really more fun?`);
// }

// ========== BASIC WEB SERVER WITH NODE ==========

const http = require('http');
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  })
  .listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124/');
