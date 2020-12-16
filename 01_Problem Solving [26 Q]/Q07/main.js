console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arrNum) {
  // YOUR CODE HERE
  const sumOddNum =[]
  arrNum.forEach(element => {
    if (element%2!==0) {
      sumOddNum.push(element)
      // console.log("sumOddNum",sumOddNum);
  }
})
  // console.log(sumOddNum);
  let sum =0;
  sumOddNum.forEach(element => {
    sum += element 
  });
  console.log(sum);
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
