const {readFile, writeFile} = require('fs').promises

// const {readFile, writeFile} = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const first = await readFilePromise('./content/first.txt', 'utf8')
// console.log(first);


const start = async() =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./sec.txt', 'utf8')
        await writeFile('./mind-grenade.txt', `I am very much Blown away : ${first}, ${second}`)
        console.log(first,second);

    } catch (error) {
        console.log(error);
    }
}

start()


