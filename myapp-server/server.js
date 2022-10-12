const express = require('express');
const connectToDB = require('./db');
const user = require('./routes');
const port = 5000;
const app = express();

connectToDB();
app.use(express.json());
app.listen(port, console.log("server is listening on PORT",port));
app.use('/',user)