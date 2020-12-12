console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(input) {
  // YOUR CODE HERE
  const strArr=input.split("")
  const cleanArr =[]
  for (let index = 0; index < strArr.length; index++) {
    if (cleanArr.indexOf(strArr[index])==-1) {
      cleanArr.push(strArr[index])
    }    
  }
  console.log(cleanArr);
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/