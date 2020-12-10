console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only 
English letter and space characters.
*/

function reverseEachWord(sen) {
  // YOUR CODE HERE
  let arrSen = sen.split(" ")
  let revArr = []
  arrSen.forEach(element => {
    let rev = element.split("").reverse().join("");
    revArr.push(rev)
  });

  return revArr.toString()
}

/*
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
