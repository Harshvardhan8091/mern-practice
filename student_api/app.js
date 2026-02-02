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
    if (i === -1) return res.json({ message: "not found" })
    students[i] = { ...students[i], ...req.body }
    fs.writeFileSync(FILE, JSON.stringify(students))
    res.json(students[i])
})

app.delete("/students/:id", (req, res) => {
    const students = JSON.parse(fs.readFileSync(FILE))
    fs.writeFileSync(FILE, JSON.stringify(students.filter(s => s.id !== req.params.id)))
    res.json({ message: "deleted" })
})

app.listen(3000, () => console.log("server running"))
