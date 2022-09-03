const http = require('http')
const port = 3030

const requestListener = ((req, res) =>{
    res.setHeader('Content-Type', 'application/json')
    res.end('!!!')
})

const server = http.createServer(requestListener)
server.listen(port, ()=>{
    console.log(`Server listening at port ${port}`);
})
