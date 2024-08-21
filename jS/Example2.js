//implement a function that take a number and return FizzBuzz if number
//is divisible by 3 and 5, and return Fizz if divisible by 3 and return
//Buzz if divisible by 5, and return number if not divisible by 3 and 5

function check(num1){
    if(num1%3===0 && num1%5===0){
        return "FizzBuzz";
    }
    else if(num1%3===0){
        return "Fizz";
    }
    else if(num1%5===0){
        return "Buzz";
    }
    else{
        return num1;
    }
}

console.log(check(15));