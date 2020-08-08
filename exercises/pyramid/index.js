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
    for(let i=1;i<=n;i++){
        let output = '';
        let k,j;
        for(j=1;j<=n-i;j++){
            output+=' ';
        }
        for(k=0;k!=(2*i-1);k++){
            output+='#';
        }
        for(j=i+1;j<=n;j++){
            output+=' ';
        }
        console.log(output);
    }
}

module.exports = pyramid;
