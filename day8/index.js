// const http = require("http")
// const fs = require("fs")
// const path = require("path")

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname, "index.html")

//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" })
//             res.end("Error loading HTML file")
//             return
//         }

//         res.writeHead(200, { "Content-Type": "text/html" })
//         res.end(data)
//     })
// })

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000")
// })

////////////////////////////////////////////////////////////////

// import http from 'http'
// import fs from 'fs'

// const server = http.createServer((req, res) => {
//     fs.readFile('note.txt', 'utf-8', (err, data) => {
//         if (err) {
//             res.end('file not found')
//             return
//         }
//         res.end(data)
//     })
// })

// server.listen(3000, () => {
//     console.log("server is running")
// })

/////////////////////////////////////////////////

