//2667. Create Hello World Function: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
     return function() {
        return "Hello World";
    }
}

let mainFuc = createHelloWorld();
console.log(mainFuc());



/*2620. Counter: Given an integer n, return a counter function. This counter function initially returns n 
and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/

function createCounter(n) {
    var plusOne = function() {
      return n++;
    } 
    return plusOne;
}

let newFuc = createCounter(10);
newFuc();
newFuc();
newFuc();



/*2704. To Be Or Not To Be: Write a function expect that helps developers test their code. It should take 
in any value val and return an object with the following two functions.*/

function expect(val) {
  return {
    toBe(val1) {
      if(val === val1) {
        return true;
      }
      else {
        return "Not Equal";
      }
    },
    notToBe(val2) {
      if(val !== val2) {
        return true;
      }
      else {
         return "Equal";
      }
    }
  }
}

let result = expect(4);
console.log(result.toBe(2));// not Equal
console.log(result.toBe(4));// true
console.log(result.notToBe(2));// true
console.log(result.notToBe(4));// Equal
