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