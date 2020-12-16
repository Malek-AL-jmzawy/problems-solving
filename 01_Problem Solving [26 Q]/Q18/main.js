console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(int) {
  // YOUR CODE HERE
  // let n =int
  const arr =[] 
  for (let index = int; index > 0; index--) {
    var numfactorial =index
    arr.push(numfactorial)
    // n--
  }
  let res =1
  for (let index = 0; index < arr.length; index++) {
    res = res*arr[index]    
  }
  console.log("res",res);
  console.log("factorial",arr);
  return res
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/