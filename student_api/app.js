const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
app.use(express.json())

const filePath = path.join(__dirname, "students.json")

const readData = () => {
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
}

const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

app.post("/students", (req, res) => {
    const students = readData()
    const newStudent = {
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    }
    students.push(newStudent)
    writeData(students)
    res.status(201).json(newStudent)
})

app.get("/students", (req, res) => {
    const students = readData()
    res.json(students)
})

app.get("/students/:id", (req, res) => {
    const students = readData()
    const student = students.find(s => s.id === req.params.id)
    if (!student) return res.status(404).json({ message: "Student not found" })
    res.json(student)
})

app.put("/students/:id", (req, res) => {
    const students = readData()
    const index = students.findIndex(s => s.id === req.params.id)
    if (index === -1) return res.status(404).json({ message: "Student not found" })

    students[index] = { ...students[index], ...req.body }
    writeData(students)
    res.json(students[index])
})

app.delete("/students/:id", (req, res) => {
    const students = readData()
    const filtered = students.filter(s => s.id !== req.params.id)
    if (students.length === filtered.length)
        return res.status(404).json({ message: "Student not found" })

    writeData(filtered)
    res.json({ message: "Student deleted" })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
