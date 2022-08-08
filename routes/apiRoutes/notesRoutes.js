const router = require('express').Router();
const {findByIdAndDelete, createNewNote, validateNote} = require('../../lib/notes');
var uniqid = require('uniquid');

//db where notes are stored
const { notes } = require('../../db/db.json');

//reads the db.json file
router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

//get by id
router.delete('/notes/:id', (req,res) => {
    results = findByIdAndDelete(req.params.id,notes);
    if(results){
        res.json(results);
    }else{
        res.send(404);
    }
});

//post a new note into db
router.post('/notes', (req, res) => {
    //generates a unique id
    req.body.id = uniqid();

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly filled out.');
    } else{
      const newNote = createNewNote(req.body, notes);
      res.json(newNote);
    }
});

module.exports = router;
