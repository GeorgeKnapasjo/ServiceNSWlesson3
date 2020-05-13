Me = {
    name: 'George',
    age: 21
}
Me['age']++
console.log(Me['age'])



Me.pets = [{
    name: "jeff",
    age: 6,
    species: "dog"
},{ name: "brad",
    age: 3,
    species: "dog"
},{ name: "dave",
    age: 4,
    species: "cat"
}]
for (let i = 0; i < Me.pets.length; i++ ){
let pet = Me.pets[i]
console.log(pet)}

Me.hobbies = ['boating', 'camping', 'fishing']
let hobbies = "My hobbies include "
for(i = 0; i < Me.hobbies.length; i++){
    let hobby = Me.hobbies[i]
    hobbies += hobby;
    if(i == Me.hobbies.length - 2){
        hobbies += " and ";
    } else if(i==Me.hobbies.length - 1){
    }
    else {
       hobbies += ", "
   }
   }
    
    console.log(hobbies)











