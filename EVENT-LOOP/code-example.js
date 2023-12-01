const { readFile } = require('fs')

console.log('starting first task')
readFile('../content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log(result)
    console.log('first task complete ')
  }
})

console.log('starting next task')
