const app = require('./app');
const port = 3030;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});