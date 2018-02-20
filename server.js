var express = require('express');
app = express();
port = process.env.PORT || 3000,
bodyParser = require('body-parser');
mongoose = require('mongoose');
var weather = require('./models/models');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Weatherdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/router')
routes(app);

app.listen(port, function(){
    console.log("APP RUNNING ON PORT " + port)
});
