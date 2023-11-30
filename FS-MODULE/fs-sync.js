const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
  '../content/result.txt',
  // `here is the result: ${first} ${second}`,
  `now I am appending`,

  // this flag: 'a' is to specify to node that you are not overwriting the whole file but just appending. Thus 'a' stands for append
  { flag: 'a' }
)
