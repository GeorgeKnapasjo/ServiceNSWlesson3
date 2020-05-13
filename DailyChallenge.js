let people = [ 
{
    name: "george",
    age: 21
},{
    name:"jeff",
    age: 36
},{
    name:"john",
    age: 42
},{
    name: "michael",
    age: 18
},{
    name: "brandon",
    age: 35
}]
function searchChar(array, search){
    let resultArr = [];
    for(let i = 0; i < array.length; i++){
        let element = array[i];

        let found = false;
        for(let i = 0; i < element.name.length; i++){
        let letter = element.name[i]
        if (letter.toLowerCase() == search.toLowerCase()){
            found=true;
        }

    }
    if(found) {
        resultArr.push(element);
}
}
return resultArr;
}
console.log(searchChar(people, "b"));
