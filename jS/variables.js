
                         //perimitive data type
var n1="hafsa";  //string
let n2="hafs";

//number
let n= 23;

//bigint
let n3= 2345577758n;

//boolean
let n4= true;

//undefined
let n5;

//symbol
//let n6= symbol();

                              //referense datatype

  //object
  let n7 ={
    name: " hafsa",
    course: 32
  };                            

console.log(typeof n1);
console.log(typeof n);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof n4);
console.log(typeof n5);
//console.log(typeof n6);
console.log(typeof n7);
console.log(n7.name + n7.course);

                                     //Arrays

 let arr= ["aaa", 233, 22222222222n];
 console.log(arr[2]);
 console.log(arr.length);
 
                                    //Functions
 //non perimitive function
 function x(){
    console.log('HI');
 }                    
 
 x();

 //parameter variable
 function x1(name){
    console.log('HI '+ name);
 }
 x1('hifza');