const fetch = require('node-fetch');

async function getTotals(){
    const options = {
        headers: {
            "x-rapidapi-key": "97b813e2bcmsha53207007bed6f1p165ad8jsn0179f34668f3"
        }
    };
    let data = await fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", options);
    data = await data.json();

    return data;
}

module.exports = {getTotals}