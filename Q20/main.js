console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(input) {
  // YOUR CODE HERE
  const arr = input
  const newArr = []
  var largestNum = 0
  for (let index = 1; index < arr.length; index++) {
    if (newArr.length < 3) {
      if (arr[index] > arr[index - 1]) {
        var largestNum = arr[index]
      }
    }
  }
  let removeFirst = arr.splice(arr.indexOf(largestNum), 1)
  newArr.push(largestNum)

  var largest2ndNum = 0
  for (let index = 1; index < arr.length; index++) {
    if (newArr.length < 3) {
      if (arr[index] > arr[index - 1]) {
        var largest2ndNum = arr[index]
      }
    }
  }

  let remove2nd = arr.splice(arr.indexOf(largest2ndNum), 1)
  newArr.push(largest2ndNum)

  var largest3rdNum = 0
  for (let index = 1; index < arr.length; index++) {
    if (newArr.length < 3) {
      if (arr[index] > arr[index - 1]) {
        var largest3rdNum = arr[index]
      }
    }
  }

  newArr.push(largest3rdNum)


  let sum = 1
  for (let index = 0; index < newArr.length; index++) {
    sum = sum * newArr[index]
  }

  return sum
}

/*
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/