// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
    for (let index = 1; index <= 10; index++) {
        console.log (index)
        
    }

// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.

    for (let index = 2; index <= 20; index++) {
        if(index % 2 === 0 ){
            console.log (index);
        }
    
}

// Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
  const numbers = 100
    let sum = 0, index = 1
    while (index <= numbers) {
        sum += index
        index ++
        //    let sum = 0    
        // for (let index = 1; index <= numbers; index++) {
        //     console.log (sum += index);;    
        }
    console.log (sum);

// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and 
// calculates their sum.
function sum1(arr){
    let total=0;
    for (counter = 0; counter < arr.length; counter++) {
        total += arr[counter];
    }
    return total;
    
}
const arr = [1,2,3,4];
const totalSum = sum1(arr);
console.log (totalSum)
        