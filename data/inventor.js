const fs = require('fs');
const PATHMOCINVENTORS = __dirname + '/mocInventor.json';

async function readMocInventor(){
    return JSON.parse(await fs.readFile(PATHMOCINVENTORS, 'utf-8'));
}



async function getAllInventors(){
    return await readMocInventor();
}

function getInventor(id){

}

function addInventor(inventor){

}

function editInventor(inventor){

}

function deleteInventor(id){

}

module.exports = {getAllInventors, getInventor, editInventor, addInventor, deleteInventor}
