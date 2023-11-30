const os = require('os')

// info about the current user
console.log(os.cpus())

// get how long the system has been running (uptime) in seconds

console.log(`uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
