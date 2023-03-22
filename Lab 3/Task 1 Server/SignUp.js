/*Create server 
has some endpoints 

signup page
 */

var http=require('http');
var fs=require('fs');

http.createServer(function(req,res)
{
    console.log('server connetced')
    res.writeHead(200,{'content-type': "text/html"})
    var html=fs.readFileSync('Signup.html')
    res.write(html);
    res.end()
}
).listen(4000)
{
  console.log('Server is listening on port 4000');
}