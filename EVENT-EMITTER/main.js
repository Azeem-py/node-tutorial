const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// customEmitter.on('response', (user, id) => {
//   console.log(`data received from ${user} with id ${id}`)
// })
// customEmitter.on('response', () => {
//   console.log(`this is another data received`)
// })

// customEmitter.emit('response', 'Azeem', '10')

customEmitter.on('response', (data) => {
  console.log(`data received from ${data[0]} with id ${data[1]}`)
})
customEmitter.on('response', (data) => {
  console.log(`age is ${data[2]} and gender is ${data[3]}`)
})

customEmitter.emit('response', ['Azeem', 1, 20, 'male'])
