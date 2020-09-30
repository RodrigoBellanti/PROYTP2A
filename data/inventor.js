
const fs = require('fs').promises;
const PATHMOCINVENTORS = __dirname + '/mocInventor.json';

async function readMocInventor(){
   return JSON.parse(await fs.readFile(PATHMOCINVENTORS, 'utf8'));
}

async function getAllInventors(){
    return await readMocInventor();
}

function getInventor(id){

}

function pushInventor(inventor){

}

function updateInventor(inventor){

}

function deleteInventor(id){

}

module.exports = {getAllInventors, getInventor, pushInventor, updateInventor, deleteInventor}