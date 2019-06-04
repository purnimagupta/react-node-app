const news = require('../models/News')

module.exports = {
    create: function(params, callback) {
        console.log("Create params ", params);
        news.create(params, function(err, results){
            if(err) {
                callback(err, null)
                return;
            }
            callback(null, results); 
        })
    },

    find: function(params, callback) {
        console.log("Find params ", params);
        news.find(params, '_id title teaser', function(err, results){
            if(err) {
                callback(err, null)
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback) {
        news.findById(id, function(err, results){
            if(err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}