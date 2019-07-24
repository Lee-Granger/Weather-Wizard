const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
 
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./public/dist/public")));
mongoose.connect('mongodb://localhost/weatherapi', { useNewUrlParser: true });
require('./server/config/mongoose.js'); 
require('./server/config/routes.js')(app); 

app.get('/test', function(req, res){
   console.log("hey bitch");
   res.redirect('/');
})



app.listen(8000, () => {console.log('Listening on port 8000')})