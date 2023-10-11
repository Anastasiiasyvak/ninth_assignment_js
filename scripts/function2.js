function calculateMultiply(x) {
    let product = x;

    function innerMultiply(y) {
        if (y === undefined) {
            return product;
        }
        product *= y;
        return innerMultiply;
    }

    return innerMultiply;
}

console.log(calculateMultiply(2)(3)(10)());         
console.log(calculateMultiply(-1)(677)(568)(2)());   
console.log(calculateMultiply(3)());                 
