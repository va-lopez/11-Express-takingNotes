const router = require('express').Router();
const {createNewNote, validateNote} = require('../../lib/notes')

//db where notes are stored
const { notes } = require('../../db/db.json');

router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly filled out.');
    } else{
      const newNote = createNewNote(req.body, notes);
      res.json(newNote);
    }
});

module.exports = router;
