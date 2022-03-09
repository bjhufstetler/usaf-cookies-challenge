const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8080;

const app = express();
app.use(cookieParser());

app.get('/login', (req, res) => {
    var opts = {
        maxAge: 900000,
        httpOnly: true
      };
      res.cookie('name', req.query.name, opts);
      res.end();
});

app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    res.status(200).send(`Hello, ${name}!`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));