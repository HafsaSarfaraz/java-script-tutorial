//adding elements
// const arr=[2,3,4,5,5];

// arr.push(3,5);  //Add to end
// arr.unshift(1);   //Add in front 
// arr.splice(1,0,34);     //Add in middle

// console.log(arr);

                         //Finding Element(values)
//  const arr=[2,5,4,3,1];
//  let indexof4=arr.indexOf(4);     //find index of any no
// let indexof3=arr.lastIndexOf(1);  //find the index of last no

// let include6= arr.includes(6);       //check wheather this no is include or not
// console.log(include6);

                          //Finding element(object/reference)
//  const arr=[
//     { id:1, name:"Hafsa"},
//     { id:2, name:"ayesha"}
//  ];
 
//  const findId1= arr.find(function(e){
//     return e.name==="Hafsa";
//  });
                       
// console.log(findId1);

                             //Removing elements

// const arr=[2,3,4,5,5];

// const remove5= arr.pop();  //remove to end
// const remove2= arr.shift();   //remove in front 
// const remove4= arr.splice(1,1);     //remove in middle

//  console.log("remove5: " + remove5);
//  console.log("remove2: " + remove2);
//  console.log("remove4: " + remove4);

//  arr=[];   //remove entire array
//  console.log(arr);

                                 //Combine and slice array
 //combine
//  const arr=[2,3,4,5];
//  const arr2=[6,7,8,9];
 
//  const newarr= arr.concat(arr2);
//  console.log(newarr);

//  //slice
//  const splitarr= arr.slice(0,3);
//  console.log(splitarr);

                               //Joining array
// //.join() //convert arr into string
// const arr=[2,3,4,5];
// const joinNum= arr.join("--");
// console.log(joinNum);

// //.split() //convert string into array
// const arr2="Hafsa is best ";
// const splitArr= arr2.toLowerCase().split(' ');
// console.log(splitArr);

                                      //sorting element in an array
//.sort() //sorting all elements
// const arr=[5,4,3,2,1];
// arr.sort();
// console.log(arr);      

//sorting an object
const arr=[
      { id:1, name:"Hafsa"},
         { id:2, name:"ayesha"},
         { id:3, name:"nimra"}
      ];

      arr.sort( function(a,b) {
            const LowerCasea= a.name.toLowerCase();
            const LowerCaseb= b.name.toLowerCase();

            if(LowerCasea<LowerCaseb){
                return -1;
            }
            else if(LowerCasea>LowerCaseb){
                return 1;
            }
            else{
                return 0;
            }
      });

      console.log(arr);
      