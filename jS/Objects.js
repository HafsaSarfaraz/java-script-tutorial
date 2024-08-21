//object literal
// const obj={
//     name:"Hafsa",
//     class: 'Bs-SE',

//     eat: function(){
//     console.log("Hello");
//     }
// }

// console.log(obj.eat);
// console.log(typeof obj);

                       //Factory Function

// function getDog(name,age){
//     return{
//         name,age,
//         eat: function(){
//             console.log("helloooo");
//         }
//     }
// }                       

// const newDog= getDog("Batool" , 21);
// console.log(newDog);

                         //Constructor Function
// function Dog(name, age){
//     this.name=name;
//     this.age=age;
//     this.eat= function(){
//         console.log("hjjj");
//     }
// }                         

// const newDog= new Dog("hhhh" , 22);
// console.log(newDog);

                          //Dynamic Objects

// const person={
//     name: "hafsa"
// }                 
// person.favouriteicecream= "Chocolate Flavoured";
// person.favouritefood= "rice rice & rice";

// console.log(person);

// delete person.name;
// console.log(person);

                        //Value Vs Reference type
// let a=10;
// let b=a;
// a=20;
// console.log(a);
// console.log(b);

//By reference(cannot change)
// let a ={value: 20};
// let b=a;
// a.value=100;
// console.log(a);
// console.log(b);
 
                 //Some property of object
// const person={
//     name:"hafsa",
//     age: 20
// }                 
// //to get all of thing in object
// // for(const key in person){
//     console.log(person[key]);
// }

//to get only keys(name,age)
// const Keys= Object.keys(person);
// console.log(Keys);

// const enteries= Object.entries(person);
// console.log(enteries);

// for(const entry of Object.entries(person)){
//     console.log(entry);
// }

                          //String Metods
//String literal
// let name= "Hafsa";
// console.log(typeof name);

// //string object
// const anotername= new String("haiqa");
// console.log(typeof anotername);

//Some built-in method of string
let sentence = "I found a new game";
const doesinclude= sentence.includes("I");
console.log(doesinclude);

