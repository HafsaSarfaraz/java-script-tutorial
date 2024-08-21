//implement a function to accept two number and return the max num

function findmax( a, b){
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}

let a=3, b=5;
console.log(findmax(a,b));