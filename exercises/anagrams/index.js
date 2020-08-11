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
	var str_a = stringA.split('').sort().ca
	console.log(str_a);
	var str_b = stringB.split('').sort().join('');
	console.log(str_b);
	if(str_a == str_b){
		return true;
	}
	else{
		return false;
	}
}

module.exports = anagrams;

console.log(anagrams('abcd','fairy tales'));