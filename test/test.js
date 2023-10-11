
describe('calculateMultiply', function () {
  it('should multiply numbers correctly', function () {
    expect(calculateMultiply(2)(3)(10)()).to.equal(60);
    expect(calculateMultiply(-1)(677)(568)(2)()).to.equal(-769072);
    expect(calculateMultiply(3)()).to.equal(3);
  });
});

describe('getFactorial', function () {
  it('should calculate factorial correctly', function () {
    expect(getFactorial(5)).to.equal(120);
    expect(getFactorial('5')).to.equal(120);
    expect(getFactorial('blabla')).to.equal('not a number');
  });
});