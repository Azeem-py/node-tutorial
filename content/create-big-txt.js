const { writeFileSync } = require('fs')

for (let i = 0; i < 5000; i++) {
  writeFileSync('big.txt', `Hello world ${i + 1}\n`, { flag: 'a' })
}

console.log('done!')
