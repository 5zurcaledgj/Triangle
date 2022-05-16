var expect    = require("chai").expect;

var msg = 'Hello World';
console.log(msg);

const Triangle  = {
  SCALENE: 'Scalene',
  EQUILATERAL: 'Equilateral',
  ISOSCELES: 'Isosceles',
  INVALID: 'Invalid'
}

function getTriangleType (a, b, c) {
  if ( typeof a !== 'number' ||  typeof b !== 'number'  ||  typeof b !== 'number'  ) {
    return Triangle.INVALID
  }

  if ( a === 0 || b === 0 || c === 0 ) {
    return Triangle.INVALID
  }

  if (a === b && b === c) {
    return Triangle.EQUILATERAL
  }

  if ( a === b || b === c || a === c ) {
    return Triangle.ISOSCELES
  }

  return Triangle.SCALENE
}


describe("Test Triangle Function", function(){
  describe("Testing Invalid Triangle", function(){
    it("Returns Invalid", function(){ 
      t1 = getTriangleType('',1,3)
      expect(t1).to.equal(Triangle.INVALID);
    })

    it("Returns Invalid", function(){ 
      t1 = getTriangleType(0,2,3)
      expect(t1).to.equal(Triangle.INVALID);
    })


    it("Returns Invalid", function(){ 
      t1 = getTriangleType(null, null, null)
      expect(t1).to.equal(Triangle.INVALID);
    })
    
    it("Returns Invalid", function(){ 
      t1 = getTriangleType('testing',0,null)
      expect(t1).to.equal(Triangle.INVALID);
    })

  })

  describe("Testing Scalene Triangle", function(){
    it("Returns Scalene", function(){ 
      t1 = getTriangleType(1,2,3)
      expect(t1).to.equal(Triangle.SCALENE);
    })

    it("Returns Scalene", function(){ 
      t1 = getTriangleType(2,1,3)
      expect(t1).to.equal(Triangle.SCALENE);
    })

    it("Returns Scalene", function(){ 
      t1 = getTriangleType(3,1,2)
      expect(t1).to.equal(Triangle.SCALENE);
    })
  })

  describe("Testing Isosceles Triangle", function(){
    it("Returns Scalene", function(){ 
      t2 = getTriangleType(1,1,3)
      expect(t2).to.equal(Triangle.ISOSCELES);
    })

    it("Returns Isosceles", function(){ 
      t2 = getTriangleType(3,1,1)
      expect(t2).to.equal(Triangle.ISOSCELES);
    })

    it("Returns Isosceles", function(){ 
      t2 = getTriangleType(1,3,1)
      expect(t2).to.equal(Triangle.ISOSCELES);
    })
  })

  describe("Testing Equilateral Triangle", function(){
    it("Returns Equilateral", function(){ 
      t3 = getTriangleType(1,1,1)
      expect(t3).to.equal(Triangle.EQUILATERAL);
    })
  })
})
  
