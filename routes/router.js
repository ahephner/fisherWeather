module.exports = function(app){
    var weatherList = require('../controllers/controller');

    app.route('/weather')
        .get(weatherList.list)
        .post(weatherList.post)
}