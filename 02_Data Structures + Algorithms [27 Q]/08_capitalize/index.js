// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newStr = str.split(" ")
    let capArr = []
    for (let index = 0; index < newStr.length; index++) {
        let str1 = newStr[index].charAt(0).toUpperCase()
        var res = str1.substring(2)
        var res2=res.concat(newStr[index])
        capArr.push(res)
        console.log("capArr", capArr);
        // console.log("capArr", upper);
        newStr[index].split("")
    }
return capArr.toString()
}

module.exports = capitalize;
