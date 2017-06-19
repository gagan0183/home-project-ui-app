var request = require('request');

module.exports.postBook = function(req, res) {
    var data = req.body;
    var response = request({
         method: 'POST',
         url: 'http://192.168.1.153:8080/book',
         json: data,
         'headers': {
            'Access-Control-Allow-Origin': 'http://192.168.1.153:8080'
         }
    }, function(err, response, body) {
        res.send(JSON.stringify(body));
    });
};