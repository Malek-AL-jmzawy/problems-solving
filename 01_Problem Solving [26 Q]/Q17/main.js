console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatingCharacter(input) {
  for (let i = 0; i < str.length; i++) {
    let character = input[i];
    if (input.indexOf(character) == i && input.indexOf(character, i + 1) == -1) {
      return character;
    }
  }
  return "no unrepeated character";
}
/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/