const http = require('http')

const server = http.createServer()

//this is showcasing that the http module, can extends the events class which makes it listen to request events.
//check node docs to see more.
server.on('request', (res, req) => {
  req.end('Welcome to node app')
})

server.listen(5000, () => console.log('listening'))
