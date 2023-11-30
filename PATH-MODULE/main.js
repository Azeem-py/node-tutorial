const path = require('path')

// this returns a platform specific filepath seperator
console.log(path.sep)

//this joins the file path together
const filePath = path.join('../content', 'subfolder', 'test.txt')
console.log(filePath)

//to get the basename of the file and not the whole file path then we can say
const base = path.basename(filePath)
console.log(base)

// this returns the absolute path of a file. it is useful when you need the absolute path of a file but then you know the path might change based on the platform the code is being executed on. So this can get you the absolute path of a file regardless of the platform you're on.

const absolute = path.resolve(__dirname, 'content', 'subcontent', 'test.txt')
console.log(absolute)
