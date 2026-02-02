const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())

const FILE = "students.json"

app.post("/students", (req, res) => {
    const students = JSON.parse(fs.readFileSync(FILE))
    const student = { id: Date.now().toString(), ...req.body }
    students.push(student)
    fs.writeFileSync(FILE, JSON.stringify(students))
    res.json(student)
})

app.get("/students", (req, res) => {
    res.json(JSON.parse(fs.readFileSync(FILE)))
})

app.put("/students/:id", (req, res) => {
    const students = JSON.parse(fs.readFileSync(FILE))
    const i = students.findIndex(s => s.id === req.params.id)
    students[i] = { ...students[i], ...req.body }
    fs.writeFileSync(FILE, JSON.stringify(students))
    res.json(students[i])
})

app.delete("/students/:id", (req, res) => {
    const students = JSON.parse(fs.readFileSync(FILE))
    const data = students.filter(s => s.id !== req.params.id)
    fs.writeFileSync(FILE, JSON.stringify(data))
    res.json({ message: "deleted" })
})

app.listen(3000)
