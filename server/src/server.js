const express = require('express');
const server = express();
const port = 5000;

server.get('/', (request, response) => {
    response.send("Hello world!");
})

server.listen(port, () =>{
    console.log('Server listening at http://localhost:${port}');
})