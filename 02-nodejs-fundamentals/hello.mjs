// const mission = process.argv[2];

// if (mission === 'learn') {
//   console.log('Time to write some node code!');
// } else {
//   console.log(`Is ${mission} really more fun?`);
// }

// ========== BASIC WEB SERVER WITH NODE ==========
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
