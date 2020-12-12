console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(input) {
  // YOUR CODE HERE
  const strArr = input.split("")
  // const cleanArr = []
  // for (let index = 0; index < strArr.length; index++) {
  //   if (cleanArr.indexOf(strArr[index]) == -1) {
  //     cleanArr.push(strArr[index])
  //   }
  // }
  const arrSort = strArr.sort()
  console.log("arrSort", arrSort);
  // var count = [];
  // strArr.forEach((i) =>{ count[i] = (count[i]||0) + 1;});
  // console.log(count);
  // console.log(cleanArr);
  const countArr = []
  var count = 1
  for (let index = 1; index < arrSort.length; index++) {
    if (arrSort[index] === arrSort[index - 1]) {
      count++
      // countArr.push(count)
      console.log(count);
    } 
    if (!(arrSort[index] === arrSort[index - 1])) {
      countArr.push(count)
      count = 1
      console.log("count2", count);
    }
    // else {
    //   countArr.push(count)
    //   count = 1
    //   console.log("count2", count);
    // }
  }
  // const m =arrSort[length - 1]
  // console.log("arrSort[length - 1]" ,m );
  if (arrSort[arrSort.length - 1] === arrSort[arrSort.length - 2]) {
    countArr[countArr.length - 1]++
  } else {
    countArr.push(1)
  }
  console.log("countArr", countArr);
}


/*
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/