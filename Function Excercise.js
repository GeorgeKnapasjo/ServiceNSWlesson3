// function addNumbers(num1, num2){
//     return num1 + num2
// }
// console.log(addNumbers(10, 12))

// function CalcLargestNumber(num1, num2){
//     if(num1 > num2){
//        return num1
//     }else if(num1 < num2){
//         return num2
//     }
// }
// console.log(CalcLargestNumber(1,2))




// function myArrayPrinter(myArray){
//     for(i = 0; i < myArray.length; i++){
//         let myItem = myArray[i];
//         console.log(myItem)

//     }
    
// }
// let names = [
//     "jeff",
//     "jim",
//     "james"
// ]
// myArrayPrinter(names)

// function createPerson(name, age){
//     return{
//     name,
//     age

// }}
// let george = createPerson('George', 21);

// console.log(george);

let people = [{
    name: "jeff",
    age: 21
},{     
    name: "george",
    age: 34
},{
    name: "amanda",
    age: 46
},{
    name: "steffan",
    age: 28
} ]


function getOldest(array){
let oldestPerson;
for(let i = 0; i < array.length; i++){
    let people1 = array[i];
    if(oldestPerson){
        if(people1.age > oldestPerson.age){
    oldestPerson = people1;
        }
}else {
    oldestPerson = people1;

}}return oldestPerson.name}
console.log(getOldest(people))
