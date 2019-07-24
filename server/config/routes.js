const controller = require('../controllers/weathercontrol.js');
const path = require('path');

module.exports = function(app){
    app.get('/', controller.home);
}