//Find even and odd number

//Even Number
function findeven(arr){
  for(let i = 0; i < arr.length ; i++){
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
  }
}

//odd number
function findodd(arr){
    let newarr=[];

    for(let i=0; i<arr.length;i++){
        if(arr[i] % 2!==0){
             newarr.push(arr[i]);
        }
    }
    return newarr;
}
let arr=[1,2,3,4,5,6,7,8,9];

findeven(arr);
console.log(findodd(arr));

