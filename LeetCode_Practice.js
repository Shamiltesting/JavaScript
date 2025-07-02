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



/*2665. Counter II: Write a function createCounter. It should accept an initial integer init. It should return 
an object with three functions.

The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.*/

function createCounter(init) {
  let current = init;
  let initial = init;
  return {
     increment: function() {
      return ++current;
     }, 
     decrement: function() {
      return --current;
     },
     reset: function() {
      current = initial;
      return current;
     }

  }
}

let resultOfMethods = createCounter(14);
console.log(resultOfMethods.increment());
console.log(resultOfMethods.decrement());
console.log(resultOfMethods.reset());



/*2629. Function Composition: Given an array of functions [f1, f2, f3, ..., fn], return a new function fn 
that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.*/

function f1(x) {
    return 2 + x;
}

function f2(x) {
    return 2 - x;
}

function f3(x) {
    return 2 * x;
}

let arr = [f1, f2, f3];

function fn() {
    function composition(x){
        let result = x;
        for(let i = arr.length - 1; i >= 0; i--){
            result = arr[i](result);
        }
        return result;
    }
    return composition;
}
let newFun = fn();
console.log(newFun(5));
