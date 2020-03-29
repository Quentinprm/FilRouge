let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'application/json'})
    fs.readFile('./catalog.json', 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    })
    res.end()
})

server.listen(8080)