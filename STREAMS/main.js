const { createReadStream } = require('fs')

const readStream = createReadStream('../content/big.txt', {
  highWaterMark: 9000,
  encoding: 'utf-8',
})

//highWaterMark is to modify the default size of 64kb, in our case we changed it to 9000 byte (90kb)
//encoding property is to specify the encoding type.

readStream.on('data', (result) => console.log(result))

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream(./content/big.txt', highWaterMark: 90000 3)
//const stream = createReadStream(../content/big. txt', { encoding: 'utf8' })
