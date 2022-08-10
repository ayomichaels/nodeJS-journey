const {readFile, writeFile} = require('fs')

console.log('starting first task');
setInterval(()=>{
    console.log('I AM AMONST THOSE THAT GOD HAS BLESSED THIS YEAR')},2000
)


readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return
    }

    console.log(result);
    console.log('completed first task');
})

console.log('starting next task');


