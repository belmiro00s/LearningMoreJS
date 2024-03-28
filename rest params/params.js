function sum (...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0 )
}

console.log(sum(100,200,300))



// Function to calculate the sum of numbers using rest parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Using the sum function with different numbers of arguments
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
console.log(sum(2)); // Output: 2
console.log(sum()); // Output: 0
