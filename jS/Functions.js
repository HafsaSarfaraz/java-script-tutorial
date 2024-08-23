                            //Function Declaration VS Expression

//1-Function Declaration
// function sayHi(){
//     console.log("hello");
// }
// sayHi();

//2-Function Expression
// let sayHi= function(){
//     console.log("Hello");
// }
// sayHi();


                                           //Hoisting
//1-Function Declaration
// console.log(sum(2,3,4));

//  function sum(num1,num2){
//      return num1+num2;
//  }

//1-Function Expression
// console.log(multi(2,3));

// let multi= function(num1,num2){
//     return num1*num2;
// }  //give an error bcz Function expression in jS doesn't support hoisting


                                //Function Argument
// function prod(num1,num2){
//     product=1;

//     for(const num of arguments){
//         product*=num;
//     }
//     return product;
// }

// console.log(prod(2,3,4,5));

                                //The Rest Operator
// function multi(...args){
//     return args.reduce((accum , currentVal)=> 
//     accum*currentVal,1);
// }                       

// console.log(multi(1,2,3,4));


// function multi(num, ...args){
//     return args.map(number => number*num);
// }

// console.log(multi(2,1,2,3,4));

                                  //Getter & Setter Method AND try/catch block
//  const course={
//  name:"Hafsa",
//      age : 20,

//     get details(){
//         return `${this.name} is ${this.age} years old`;
//     },

//      set details(value){
//        if(typeof value != "String"){
//          throw new Error("The value is not in string");
//        }
//        let parts = value.split('is');
//        this.name= parts[0];
//        this.age= parseInt(parts[1]);
//     }

//  }    

//  //console.log(course.details);

//  //course.details="Hafsa is 40 years old";
// try{
//  course.details=20;
//  console.log(course.details);
// }catch(e){
//     console.log(`Caught an error ${e.message}`)
// }
 
                                       //Local VS Global Scope
//1-Local Scope

// function names(){
//     let name="Hafsa";
// }

// console.log(name); //this give an error bcz the local variable cannot call outside the body

//2-Global Scope

//  const name='Hafsa';
// function names(){
//     console.log(name);
// }

// names();


                                    //Let VS Var Keyword
//1-Let keyword(only accessible within the block it's defined)      
// function display(){
//     for(let i=0; i<4; i++){
//         console.log(i);
//     }
//     //console.log(i); //this give an error bcz let variable cannot declare outside of where it's defined

// }              

// console.log(display());

//2-Var keyword (is also accessible in the function body)
// function display(){
//     for(var i=0; i<4; i++){
//         console.log(i);
//     }
//     console.log(i); //this cannot give an error bcz Var keyword canbe declared outside of where it's defined

// }              

// console.log(display());

