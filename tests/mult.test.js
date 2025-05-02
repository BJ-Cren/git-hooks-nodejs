const result = require('../src/mult');

it('should return correct mult', () => { 
    const nextResult = result( 3, 5 ) 
    expect(nextResult).toBe( 15 ) 
})