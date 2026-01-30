const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'note.txt')

fs.appendFile(filePath, "\nthis is a new line", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("data added successfully");
})
