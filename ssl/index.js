const express = require('express'),
  https = require('https'),
  path = require('path'),
  fs = require('fs'),
  helmet = require('helmet');

const app = express();

app.use(helmet());

app.use('/', (req, res, next) => {
  res.send('hello from SSL server');
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  },
  app
);

sslServer.listen(3443, () => console.log('Secure server on port 3443'));
