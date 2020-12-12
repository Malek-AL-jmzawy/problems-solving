console.log('Problem Solving Q:14 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  // YOUR CODE HERE
  const middle =arr.length/2

  if ((arr.length%2)===0) {
    let output= (arr[middle]+arr[middle-1])/2
    return output
  }else{
    let output= arr[middle-.5]
    return output
  }
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/