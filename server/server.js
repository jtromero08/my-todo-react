const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Project Server, Active');
})

server.listen(4040, () => {
    console.log('Server Project Running...')
})