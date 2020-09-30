const express = require('express');
const router = express.Router();
const dataInventors = require('./../data/inventor');

// listado de todos los inventors
// http://localhost:3000/api/inventors/
router.get('/', async (req, res) =>{
    res.json( await dataInventors.getAllInventors());
});

// http://localhost:3000/api/inventors/8
router.get('/:id', (req, res) =>{
    res.send('Un inventor especifico');
});

router.post('/', (req, res) => {
    res.send('Aca se hace un alta');
});

router.put('/:id', (req, res) =>{
    res.send('Acá se hace una modificacion');
});

router.delete('/:id', (req,res) => {
    res.send('Acá se hace la eliminacion');
});


module.exports = router;