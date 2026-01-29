const http = require("http")
const fs = require("fs")
const path = require("path")

function serveHTML(res, filename) {
    const filePath = path.join(__dirname, "pages", filename)

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" })
            res.end("<h1>500 Server Error</h1>")
            return
        }

        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        serveHTML(res, "./home.html")
    } 
    else if (req.method === "GET" && req.url === "/about") {
        serveHTML(res, "./about.html")
    } 
    else if (req.method === "GET" && req.url === "/contact") {
        serveHTML(res, "./contact.html")
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.end("<h1>404 Page Not Found</h1>")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})
