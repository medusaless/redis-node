var redis = require('redis');
var HOST = '127.0.0.1',
    PORT = 6379, 
    _password = 'admin';

var client = redis.createClient(PORT, HOST, {auth_pass:_password});

client.on('error', err => {
    console.log('Error:' + error);
});

client.hkeys('person', (err, reply) => {
    console.log(reply);
});

client.quit();