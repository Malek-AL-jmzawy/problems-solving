// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var space =(n-1)
    var count = 1
    for (let index = 0; index < n; index++) {
        const step=" ".repeat(space).concat("#".repeat(count)," ".repeat(space));
        console.log(step);
        var count = count+2
        space=space-1
    }
}


module.exports = pyramid;
