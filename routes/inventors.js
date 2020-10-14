const express = require('express');
const router = express.Router();
const dataInventor = require('./../data/inventor');
const jwt = require('jsonwebtoken');
const ejwt = require('express-jwt');
//dotenv

// listado de todos los inventors
// http://localhost:3000/api/inventors/
router.get('/', async (req, res) =>{
    const data = await dataInventor.getAllInventors();
    res.json(data);
});

router.post('/login', (req,res) => {
    // Mock user
    const user = {
        id:1,
        username:'rodrigo',
        email:'rodrigo@mail.com'
    }
    jwt.sign({user}, 'secretkey', (err,token) =>{
        res.json({
            token
        })
    } )
})

// http://localhost:3000/api/inventors/8
router.get('/:id', verifyToken, async (req, res) =>{
    jwt.verify(req.token, 'secretkey', async(err,authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            res.json(await dataInventor.getInventor(req.params.id));          
        }
    })
    
});



router.post('/', verifyToken, async (req, res) => {
    jwt.verify(req.token, 'secretkey', async (err,authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            const inventor = req.body
            await dataInventor.pushInventor(inventor)
            const inventorPersistido = await dataInventor.getInventor(inventor._id)
            res.json(inventorPersistido)      
        }
    })
})



router.put('/:id', verifyToken,async (req, res) =>{
    jwt.verify(req.token, 'secretkey', async (err,authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            const inventor = req.body;
            inventor._id = req.params.id;
            await dataInventor.updateInventor(inventor);
            res.json(await dataInventors.getInventor(req.params.id));
        }
    })
});

router.delete('/:id', async (req,res) => {
    jwt.verify(req.token, 'secretkey', async (err,authData) => {
        if(err){
            res.sendStatus(403)
        }else{
            console.log('Delete');
            await dataInventor.deleteInventor(req.params.id);
            res.send('Inventor eliminado');
        }
    })  
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1]
        req.token = bearerToken;
        next()
    }else{
        res.sendStatus(403);
    }
}

module.exports = router;