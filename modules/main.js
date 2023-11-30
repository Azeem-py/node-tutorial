const { john, peter, susan } = require('./names')
// the requrire() function is to import the needed modules to the current file so exports can be accessed
const sayHello = require('./utils')

// console.log(john)

sayHello(john)
sayHello(peter)
sayHello(susan)

// ALTERNATIVE FLAVOR
