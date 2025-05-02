const sum = require('../src/sum');

it('should return correct sum', () => {
    const theResult = sum( 2, 5)
    expect(theResult).toBe(7)
})