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
  const cleanArr = []
  for (let index = 0; index < strArr.length; index++) {
    if (cleanArr.indexOf(strArr[index]) == -1) {
      cleanArr.push(strArr[index])
    }
  }

  const arrSort = strArr.sort()
  const arrArray = []
  for (let index = 0; index < cleanArr.length; index++) {
    let eArray = cleanArr[index].split("");
    arrArray.push(eArray)

  }

  const countArr = []
  var count = 1
  for (let index = 1; index < arrSort.length; index++) {
    if (arrSort[index] === arrSort[index - 1]) {
      count++
    }

    if (!(arrSort[index] === arrSort[index - 1])) {
      countArr.push(count)
      count = 1
    }

    if (arrSort[arrSort.length - 1] === arrSort[arrSort.length - 2] && (index == (arrSort.length - 1))) {
      countArr.push(count)

    } else if (!(arrSort[arrSort.length - 1] === arrSort[arrSort.length - 2]) && (index == (arrSort.length - 1))) {
      countArr.push(1)
    }
  }

  arrArray.forEach((e,i)=>e.push(countArr[i]))
  return arrArray
  
}


 
/*
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/