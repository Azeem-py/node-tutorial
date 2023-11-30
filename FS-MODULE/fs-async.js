// readFile and writeFile are ayncx

const { readFile, writeFile } = require('fs')

readFile('../content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('../content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    console.log(first, second)
    writeFile(
      '../content/result-async.txt',
      `the async result: ${first} and ${second}`,
      { flag: 'a' }, //the {flag: 'a'} is to make sure it dosen't overwrite but just append
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})
