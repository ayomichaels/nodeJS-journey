const http = require('http')

const server = http.createServer((req, res)=>{
    //req is incoming request
    //res is what is sent back
    // console.log(req);
    // res.write('Welcome to our homepage')
    // res.end()
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }

    if (req.url === '/about') {
        res.end('A brief history')

    }

    res.end('<h1>Oops Page does not exist</h1>')
})

server.listen(5000, ()=>{
    console.log('server is listening on port 5000');
})