// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    str = str.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase()+s.substring(1))
        .join(' ');
    return str;
}

module.exports = capitalize;
