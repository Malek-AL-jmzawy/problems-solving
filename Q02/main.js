console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter 
being passed and return the largest word in the string.
 If there are two or more words that are the same length,
  return the first word from the string with that length. 
  Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  if (sen.length===0) {
    return "the input is empty "
  }
  let res =sen
  // YOUR CODE HERE
    //attrate the array and remove punctuation
    const element = res.replaceAll("@","")
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

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
