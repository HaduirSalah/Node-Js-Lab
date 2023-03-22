/*Create server 
has some endpoints
  
login page
signup page
home page 
profile page
 */


// Using URL ,HTTP and Routing
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res)
{
 console.log('server connetced')
  if (req.url == '/')
  {
    // Home Page
    res.writeHead(200,{'content-type': "text/html"})
    var html=fs.readFileSync('Home.html')
    res.write(html);
    res.end()
  }
  // Login Page
  else if (req.url == '/Login')
  {
        res.writeHead(200,{'content-type': "text/html"})
        var html=fs.readFileSync('Login.html')
        res.write(html);
        res.end()
  }
  // SignUp Page
  else if (req.url=='/SignUp')
  {
    res.writeHead(200,{'content-type': "text/html"})
    var html=fs.readFileSync('Signup.html')
    res.write(html);
    res.end()
}

else if (req.url=='/Profile')
{
  // Profile Page
  res.writeHead(200,{'content-type': "text/html"})
  var html=fs.readFileSync('Profile.html')
  res.write(html);
  res.end()
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




