console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(input) {
  // YOUR CODE HERE
  const arr = input
  var num = null

  for (let index = 1; index < arr.length; index++) {

    if (arr[index] === arr[index - 1]) {
      var num = arr[index]
      return arr[index]
    }
  }
  
if (num===null) {
  return "no repeated numbers");
}

}

/*
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/