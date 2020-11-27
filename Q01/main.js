console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return
the largest word in the string. If there are two or more words that are the same
length, return the first word from the string with that length.
*/

function longestWord(sen) {
  // YOUR CODE HERE
  function longestWord_2(sen) {
    if (sen.length===0) {
      return "the input is empty "
    }
    // YOUR CODE HERE
      //attrate the array and remove punctuation
      const element = sen
      console.log("element",element);
      //split into Array
    const arr= element.split(" ")
    console.log("arr 1:",arr);
  
  
    //attrate the array and remove punctuation
    var output =""
  for (let i = 0; i < arr.length; i++) {
  if (arr[i].length>output.length) {
    var output =arr[i]
    console.log("long",output);
  }
  console.log("long22",output);
  
  }
    console.log(arr);
    return output
  }
  
}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
