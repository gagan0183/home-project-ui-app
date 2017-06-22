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
        if(err) {
            res.status(400).send({
                message: 'This is an error!'
            });
        }
        res.send(JSON.stringify(body));
    });
};