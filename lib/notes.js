const fs = require('fs');
const path = require('path');

function findByIdAndDelete(id,notes){
    const index = notes.findIndex(note => note.id ===id);
    //remove from array
    notes.splice(index,1);
    //rewrite the file
    fs.writeFile('./db/db.json', JSON.stringify({ notes},null,2),function(err){
        if(err) throw err;
        console.log("file is overwritten");
    });
    return notes;
}

function createNewNote(body, notes){
    const newNote = body;
    notes.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return newNote;
};

function validateNote(note){
    if(!note.title || typeof note.title !== 'string')
        return false;
    if(!note.text || typeof note.text !== 'string')
        return false;
    return true;
}

module.exports = {
    findByIdAndDelete,
    createNewNote,
    validateNote
};