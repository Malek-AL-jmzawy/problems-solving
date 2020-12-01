console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(arr) {
  // YOUR CODE HERE
  const uniqueArr = arr;
  let unique = 0
  const arr2=[]
  for (let index = 0; index < uniqueArr.length; index++) {
    if (!(arr2.includes(uniqueArr[index]))) {
      uniqueArr.forEach(element => {
        if (element === uniqueArr[index]) {
          // unique += 1
          arr2.push(element)
          // console.log("unique1", unique);
          console.log("element", element);
          console.log("uniqueArr[index]", uniqueArr[index]);
  
        }
      });
    }else{
      console.log("exist");
    }
    

  }
  console.log("unique2", unique);
  console.log("arr2", arr2);
}

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
