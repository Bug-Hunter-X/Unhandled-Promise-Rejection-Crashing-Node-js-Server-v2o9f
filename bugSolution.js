const http = require('http');

const server = http.createServer((req, res) => {
  const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Operation successful');
      } else {
        reject(new Error('Operation failed'));
      }
    }, 1000);
  });

  asyncOperation
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      console.error('Error handled gracefully:', error); //Improved error handling
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});