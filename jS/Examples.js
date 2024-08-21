                      //Question 1
// function add(num1, num2){
//       return num1+num2;
// }

// let a=2;
// let b=3;
// console.log(add(a,b));

                   //Question 2
//  function check(num1){
//     if((num1%2)===0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
//  }                   

//  console.log(check(2));

                //Question 3
//  function lenghtChk(str){
//     return str.length;
//  }               

//  let a="Hafsa";
//  let v=lenghtChk(a);
//  console.log(v);

            //Question 4
//  function posiArr(arr){
//     let newarr=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             newarr[i]=arr[i];
//         }
//     }
//     return newarr;
// }            
            
// let arr=[1,-2,3,-4,5,-6];
// let v=posiArr(arr);
// console.log("The positive number in arr is: " + v);

         //Question 5
// for(let i=1; i<=100; i++){
//     if((i%3===0)&&(i%5===0)){
//         console.log("FIZZ BUZZ");
//     }
//     else if(i%3==0){
//         console.log("FIZZ");
//     }
//     else if(i%5==0){
//         console.log("BUZZ");
//     }
//     else{
//        console.log(i);
//     }  
// }       

        //Question 6
//         function per(person){
//           return (person.name, person.age, person.occupation);
          
//         }

//  const person={
//     name: "Hafsa",
//     age: 20,
//     occupation: "BS-SE (semes-4)"
//  }       

//  console.log(person);
 
      //Question 7
      function getTopStudent(students) {
        if (students.length === 0) {
            return null;
        }
    
        let topStudent = students[0];
    
        for (let i = 1; i < students.length; i++) {
            if (students[i].grade > topStudent.grade) {
                topStudent = students[i];
            }
        }
    
        return topStudent.name;
    }

      const students = [
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 92 },
        { name: 'Charlie', grade: 88 }
    ];

    let v= getTopStudent(students);
    console.log("The name of top student is: " + v);
