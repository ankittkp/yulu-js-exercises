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
    let sum =0;
    if(n==0){
        return 0;
    }
    const isNegative = n< 0 ? true : false;
    if (isNegative){
        n = n *-1;
    }
    while(n>0){
        let temp = n%10;
        sum = sum * 10 + temp;
        n = parseInt(n / 10);
    }
    return isNegative? sum * -1 : sum;
}

module.exports = reverseInt;
