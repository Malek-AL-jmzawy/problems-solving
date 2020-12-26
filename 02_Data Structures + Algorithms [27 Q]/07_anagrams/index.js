// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const newArrA = stringA.replace(/[.*+,?^${/@!#$%^&*_=+/}()" "|[\]\\]/g, '').split("")
    const newArrB = stringB.replace(/[.*+,?^${/@!#$%^&*_=+/}()" "|[\]\\]/g, '').split("")
    arrb = true
    var lastLength=0
    if (newArrA.length > newArrB.length) {
        var lastLength = newArrA.length
    } else {
        var lastLength = newArrB.length
    }

    const res = []
    for (let i = 0; i < lastLength; i++) {
        if (newArrB.indexOf(newArrA[i]) > -1 || newArrA.indexOf(newArrB[i]) > -1) {
            res.push(true)
            console.log("res1", res);
        } else {
            res.push(false)
            console.log("res2", res);
        }

    }

    if (res.indexOf(false) === -1) {
        console.log("resfinal", true);
        return true
    } else {
        console.log("resfinal", false);
        return false

    }
}



module.exports = anagrams;
