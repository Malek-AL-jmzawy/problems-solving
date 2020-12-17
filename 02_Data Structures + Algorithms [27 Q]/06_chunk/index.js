// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // .split(",",1);
    // var filArr;
    // let bam = array
    const newArr=[]
    for (let index = 0; index < array.length; index++) {
        if (index%size===0) {
            var m=array.slice(index,index+size)
            newArr.push(m)
            // console.log("newArr",newArr);
            // console.log("array",array);
        }
    }
    console.log("newArr",newArr);
    // console.log("newArra",newArra);
    return newArr
}

module.exports = chunk;
