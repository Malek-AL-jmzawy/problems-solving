// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const arrString=str.split("")
    let count =0
    for (let index = 0; index < arrString.length; index++) {
        if (arrString[index]==="a"||arrString[index]==="e"||arrString[index]==="i"||arrString[index]==="o"||arrString[index]==="u") {
            count++
        }
    }
    console.log(count);
}

module.exports = vowels;
