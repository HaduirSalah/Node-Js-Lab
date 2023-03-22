/* Route 
Get / → open home page → html; with <title> and <h1> Welcome  
 
(bonus) Using static file CSS */

var http = require('http')
var fs = require('fs')
var path = require('path')


http.createServer(function (req, res) {
    if (req.url == '/' && req.method == 'GET') {
        console.log('server connetced')
        res.writeHead(200, { 'content-type': "text/html" })
        var html = fs.readFileSync('Home.html')
        res.write(html);
        res.end()
    }
    else if (req.url === '/Style.css' && req.method === 'GET') {
        // Serve the CSS file
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const css = fs.readFileSync('Style.css');
        res.write(css);
        res.end();
      }
    else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
      }

}).listen(4000)
{
    console.log('Server is listening on port 4000');
}
