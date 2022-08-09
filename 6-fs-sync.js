const {readFileSync, writeFileSync} = require('fs')

//WITHOUT DESTRUCTURING
// const fs = require('fs')
// const first = fs.readFileSync('./content/first.txt', 'utf8')

// const second = fs.readFileSync('./sec.txt', 'utf8')

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./sec.txt', 'utf8')


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('done with the task');
console.log('start next task');