const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./public/dist/public")));
require('./server/config/routes.js')(app); 


app.listen(8000, () => {console.log('Listening on port 8000')})