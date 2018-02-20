var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weatherSchema = new Schema({
  
    temp: {
        type: Number
        
    },
    precp:{
        type: String
    },

})

module.exports = mongoose.model('weather', weatherSchema);