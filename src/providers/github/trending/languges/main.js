const fetch = require('node-fetch');
const fs = require('fs').promises;
const fetchData = require('./postprocessing');
const input = require('./input');
async function main ({query,params}) {
    let {listFrom,pagination} = query;
    const url =`https://api.github.com/search/repositories?q=created:${listFrom}&sort=stars&order=desc&page=2&per_page=${pagination}`;
    const options = {
        "method":"GET",
    }
	const response = await fetch(url,options);
    const json = await response.json();
    
   
    fs.writeFile ("input.json", JSON.stringify(json.items), function(err) {
            if (err) throw err;
             console.log('complete');
            }
         ).then(fetchData(input));

    

    
    
};
//console.log(main({query:{listFrom:"2020-05-16",pagination:"100"}}))
module.exports = main;
