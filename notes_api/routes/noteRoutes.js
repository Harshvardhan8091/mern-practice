const express = require("express")
const Note = require("../models/Note")

const router = express.Router()

router.post("/notes", async (req, res) => {
    const note = await Note.create(req.body)
    res.status(201).json(note)
})

router.get("/notes", async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
})

router.get("/notes/:id", async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
})

router.put("/notes/:id", async (req, res) => {
    const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.json(note)
})

router.delete("/notes/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({ message: "Note deleted" })
})

module.exports = router
