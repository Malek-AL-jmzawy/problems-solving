console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1, str2) {
  // YOUR CODE HERE

  const repSen1 = str1.replace(",", "")
  const arr = repSen1.replace(/\s+/g, '').trim().split("")
  
  const repSen2 = str2.replace(",", "")
  const arr2 = repSen2.replace(/\s+/g, '').trim().split("")


  Array.prototype.diff = function (arr2) {
    var ret = [];
    for (var i in this) {
      if (arr2.indexOf(this[i]) > -1) {
        ret.push(this[i]);
      }
    }
    return ret;
  };

  let diffiranceArr = arr.diff(arr2)
  return diffiranceArr.toString()
}

/*
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/