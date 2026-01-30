// const fs = require('fs')
// const path = require('path')

// const filePath = path.join(__dirname, 'note.txt')

// fs.appendFile(filePath, "\nthis is a new line", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("data added successfully");
// })


// const fs = require('fs')
// const path = require('path')

// const imagePath = path.join(__dirname, 'java.jpg')

// fs.readFile(imagePath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("image read successfully");
// })

const fs = require('fs')

fs.readFile("java.jpg", (err, data) => {
    if (err) throw err;

    fs.writeFile("copy.png", data, () => {
        console.log("image copied");
    })
})
