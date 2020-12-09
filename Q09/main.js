console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(input) {
  // YOUR CODE HERE
  const arr = input;
  var onesNum = 0;

  const ones = arr.toString().replaceAll(",", "").split("0")

  for (let index = 0; index < ones.length; index++) {
    if (ones[index].length > onesNum) {
      onesNum = ones[index].length
    }
  }
  if (onesNum === 0) {
    return 'There is no one sequenced'
  } else {
    return onesNum
  }

}


/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/





// function longestSequence(input) {
//   // YOUR CODE HERE
//   const arr = input;
//   var onesNum = 0;
//   var zerosNum = 0;
//   const zeros = arr.toString().replaceAll(",", "").split("1")

//   for (let index = 0; index < zeros.length; index++) {
//     if (zeros[index].length>zerosNum) {
//       var zerosNum=zeros[index].length
//     }
//   }
//   const ones = arr.toString().replaceAll(",", "").split("0")

//   for (let index = 0; index < ones.length; index++) {
//     if (ones[index].length>onesNum) {
//        onesNum=ones[index].length
//     }
//   }
//   if(onesNum>zerosNum){
//     return onesNum
//   }else if(onesNum<zerosNum){
//     return zerosNum
//   }else{
//     return
//   }


//   console.log("zeros", zeros);
//   console.log("ones", ones);
// }