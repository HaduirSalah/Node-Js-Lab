// Using Postman , URL , HTTP , Rounting

const http = require('http');
const fs = require('fs');

// create an empty array to store the user data
let usersData = [];

// create a server
var server = http.createServer((req, res) => {

  // handle the signup request
  if (req.method === 'POST' && req.url === '/SignUp') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { email, password, username } = JSON.parse(body);

      // check if the user already exists
      const existingUser = usersData.find(user => user.email === email);
      if (existingUser) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Email already exists' }));
      } else {
        // save the user data to the file
        usersData.push({ email, password, username });
        fs.writeFile('users.json', JSON.stringify(usersData), (err) => {
          if (err) throw err;
          console.log('User data saved to file');
        });

        // send the success response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created successfully' }));
      }
    });

  // handle the login request
  } else if (req.method === 'POST' && req.url === '/Login') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { email, password } = JSON.parse(body);

      // check if the user exists and the password is correct
      const user = usersData.find(user => user.email === email);
      if (!user) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Email does not exist. Please signup.' }));
      } else if (user.password !== password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Wrong password' }));
      } else {
        // send the success response with user name
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Welcome ${user.username} to your profile` }));
      }
    });

  // handle invalid requests
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// start the server
server.listen(4000, () => {
  console.log('Server started on port 4000');
});
