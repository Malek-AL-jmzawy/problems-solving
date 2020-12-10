console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(input) {
  // YOUR CODE HERE

  let sen = input
  const arrSen = sen.split(" ")

  var char = 0

  for (let index = 0; index < arrSen.length; index++) {
    if (arrSen[index].length > char) {
      var char = arrSen[index].length
    }
  }
  return char
}

/*
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
