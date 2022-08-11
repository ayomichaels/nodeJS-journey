
//Event Emitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//ORDER MATTERS 
//first listen for the event
customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id : ${id}`);
})
customEmitter.on('response', (name,id)=>{
    console.log(`some other logic here with the same user ${name} but no id this time`);
})
//then emit the response
customEmitter.emit('response', 'Kante', 28)