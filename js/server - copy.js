var connect = require('connect'); 
var serveStatic = require('serve-static'); 
var app = connect(); 
app.use(serveStatic('F:/!learn/anjs')); 
app.listen(5000);