// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArr = str.split("").sort()

    let maxArr = []
    for (let index = 1; index < strArr.length; index++) {
        if (strArr[index] === strArr[index - 1]) {
            maxArr.push(strArr[index])
        }
    }
    var final=1
    var sum=0
    var  item; 
        for (let index = 0; index < maxArr.length; index++) {
            for (let j = index; j < maxArr.length; j++) {
                if (maxArr[j]===maxArr[index]) {
                    sum++
                    if (sum>final) {
                        var final=sum
                        var item =maxArr[index]
                    }
                }                
            }
            sum =0            
        }
        return item.toString()
    
}

module.exports = maxChar;
