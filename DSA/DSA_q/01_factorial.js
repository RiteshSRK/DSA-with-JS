function factorial(num) {
    let result = 1;  // Shuruat mein result 1 hai
    
    for (let i = 1; i <= num; i++) {
      result = result * i;  // Har step par result ko i se multiply karte hain
    }
    
    return result;  // Aakhri mein result denge
  }
  
  // Is function ko call karte hain:
  console.log(factorial(5));  // Output: 120
  console.log(factorial(4));  // Output: 120
  
