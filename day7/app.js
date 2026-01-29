// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('hello from Node.js')

// })

// server.listen(3000, ()=>{
//     console.log("the server is running");
// })


//create seerver() > create server
//(                  )

const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.end("Home Page")

    }
    else if(req.url == '/about'){
        res.end("about page");
    }
    else{
        res.end("404 page not found");
    }
})
server.listen(3000, ()=>{
    console.log("server is running on port 3000")
});