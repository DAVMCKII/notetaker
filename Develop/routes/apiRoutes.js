const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync =util.promisify(fs.writeFile);
// GET request

router.get('/api/notes', function(req, res){
    readFileAsync('./develop/db/db.json', 'utf-8').then(function(data){
        notes = [].concat(JSON.psrse(data))
        res.json(notes);
    })
})

// POST request

router.post('/api/notes', function(req, res){
    readFileAsync('./develop/db/db.json', 'utf-8').then(function(data){
        notes = [].concat(JSON.psrse(data))
        note.id = notes.length + 1
        notes.push(note);
        return notes

    }).then(function(notes){
        writeFileAsync('./develop/db/db.json',JSON.stringify(notes))
        res.json(notes)
    })
})

// DELETE REQUEST

router.delete('/api/notes/:id', function(req, res){
    const idToDelete = parseInt(req.params.id);
    readFileAsync('./develop/db/db.json', 'utf-8').then(function(data){
        notes = [].concat(JSON.psrse(data));
        const newNotesData = []
        for (let i = 0; i<notes.length; i++) {
            if(idToDelete !== notes [i].id) {
                newNotesData.push(notes[i])
            }
        }
        return newNotesData
    }).then(function(notes){
        writeFileAsync('./develop/db/db.json', JSON.stringify(notes))
        res.send('');
    })
})

module.exports = router;