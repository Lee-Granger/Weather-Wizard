path = require('path');
module.exports = {
    home: function(req, res){
        console.log('This is the request object: ' + req);
        console.log("This is the response object: ", res);
        res.render('homepage.ejs');
    },
}