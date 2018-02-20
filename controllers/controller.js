var mongoos = require('mongoose'),
    weather = mongoose.model('weather');

    exports.list = function(req, res){
        weather.find({}, function(err, weather){
            if(err)
            res.send(err);
            res.json(weather);
        })
    };

    exports.post = function(req, res){
        var update = new weather(req.body);
        update.save(function(err, weather){
            if(err)
            res.send(err);
            res.json(weather);
        });
    };