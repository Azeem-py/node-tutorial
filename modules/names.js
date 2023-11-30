const SECRET_KEY = 'very secret stuff'
const peter = 'Peter'
const john = 'John'
const susan = 'Susan'

// using the module global variable, we can use the exports object to define exported variables in our js file so they can be accessed from another file
module.exports = { peter, john, susan }
// console.log(module)

// ALTERNATIVE FLAVOR

// we can also add items to the export object like this

const SECRET = 'very secret stuff'
module.exports.precious = 'Precious'
const mike = 'Mike'

module.exports.mike = mike

console.log(module.exports)
