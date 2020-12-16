// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n < 0) {
        const revInt = n.toString().replace("-","").split("").reverse().join("").toString()
        return Number(revInt)*-1

    }
    const revInt = n.toString().split("").reverse().join("").toString()
    return Number(revInt)

}

module.exports = reverseInt;
