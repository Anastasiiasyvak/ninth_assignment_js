function getFactorial(n) {
    n = parseInt(n); 

    if (isNaN(n) || n < 0) {
      return 'not a number';
    }
  
    if (n === 0) {
      return 1;
    }
  
    return n * getFactorial(n - 1);
}

console.log(getFactorial(5));     
console.log(getFactorial('5'));   
console.log(getFactorial('blabla')); 
