// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const v = ['a', 'e', 'i', 'u', 'o']
function vowels(str) {
    let count = 0;
    str.toLowerCase().split('').map(c => v.includes(c) ? count++ : false);
    return count;
}

module.exports = vowels;
