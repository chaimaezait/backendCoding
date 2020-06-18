
async function fetchData(input){
    let {id,node_id,name,full_name,language} = input
    let items = [];
    let langCount = {};
    for(let i =0;i<input.length;i++){
        items.push(input[i].language)
    //items.push(input[i].full_name)
    //return items
    }
    items.forEach(function(value, index){
        if(value in langCount){
            langCount[value]+=1;
        }
        else{
            langCount[value]=1;  
        }

    });
// console.log(langCount )
// console.log(items) ;
let data =[];
data.push({
    langCount,
    items
})
console.log(data)

}
module.exports = fetchData