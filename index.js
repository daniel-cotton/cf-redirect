const express = require('express');
const app = express();
const port = process.env.PORT || process.env.port || 3000;

app.use('/', (req, res, next) => res.redirect(process.env.REDIRECT_HOST + req.originalUrl));

app.listen(port, () => console.log('Example app listening on port: ' + port));