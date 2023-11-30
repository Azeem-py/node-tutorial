const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my node js app server')
  } else if (req.url === '/about') {
    res.end('this is about us')
  } else {
    res.end(`<h1>oops!</h1>
 <p>We can't find the page you are looking for</p>
 <a href='/'>Go back home</a>`)
  }

  //we can use res.write to write and res.end() to end but then we can just use the shorthand method by writing directly in the res.end() e.g res.end('hello there')
  // res.write('Hello, welcome to my first http server')
  // res.end()
})

server.listen(5000)
