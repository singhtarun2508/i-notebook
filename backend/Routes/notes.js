const express = require('express')
const router = express.Router()
const fetchuser = require('../Middleware/Fetchuser');
const Notes = require('../Models/Notes')
const { body, validationResult } = require('express-validator');


//Route 1: get all notes
router.get('/fetchnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
})


//Route 2: add notes
router.post('/addnotes', fetchuser,
    body('title', 'Minimum 3 characters required').isLength({ min: 5 }),
    body('description').isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, tag } = req.body;
        try {
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save();
            res.json(savedNote)

        }
        catch (error) {
            console.log(error.message)
            res.status(500).json('some error occured')
        }
    })

//Route 3: update notes
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    const newNote= {};
    if(req.body.title){newNote.title=req.body.title}
    if(req.body.description){newNote.description=req.body.description}
    if(req.body.tag){newNote.tag=req.body.tag}
    let note=await Notes.findById(req.params.id)
    if(!note){
        res.status(404).json("not found")
    }
    if(note.user.toString()!==req.user.id){
        res.status(401).json("unauthorised user")
    }

    note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json(note) 
    })


//Route 4: delete notes
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    let note=await Notes.findById(req.params.id)
    if(!note){
        res.status(404).json("not found")
    }
    if(note.user.toString()!==req.user.id){
        res.status(401).json("unauthorised user")
    }

    note= await Notes.findByIdAndDelete(req.params.id)
    res.json("deleted") 
    })

module.exports = router