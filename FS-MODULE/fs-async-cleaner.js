// const { readFile } = require('fs')

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, result) => {
//       if (err) reject(err)
//       else resolve(result)
//     })
//   })
// }

// const start = async () => {
//   const first = await getText('../content/first.txt')
//   const second = await getText('../content/second.txt')
//   console.log(first, second)
// }

// start()

//METHOD 2 !!!

//USING THE UTIL MODULE

// const { readFile, writeFile } = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   const first = await readFilePromise('../content/first.txt', 'utf8')
//   const second = await readFilePromise('../content/second.txt', 'utf8')
//   await writeFilePromise(
//     '../content/result-async.txt',
//     `THIS IS AWESOME: ${first} ${second}`,
//     'utf8'
//   )
//   console.log(first, second)
// }

// start()

//THIRD METHOD

//USING THE PROMISDE FEATURE FROM require('fs').promise

const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')
    await writeFile(
      '../content/result-async.txt',
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
