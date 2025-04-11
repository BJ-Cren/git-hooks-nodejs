const mult = require('../src/mult')

it('should return correct mult', () => { 
    const nextResult = mult(3, 5) 
    expect(nextResult).toBe(15) 
})