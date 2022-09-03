const http = require('http')
const myModule = require('./my-module')

const port = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    const person1 = new myModule.Person({
        name: 'Jake', 
        age: 19
    })

    const person2 = new myModule.Person({
        name: 'Miko', 
        age: 12
    })

    res.end(`${person1.ageInfo()} and ${person2.ageInfo()}.`)
})

server.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})
