// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
    if (str.length <= 1) return true;
    return str.charAt(0) === str.substring(str.length - 1, str.length) 
        && palindrome(str.substring(1, str.length - 1))
}

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str.charAt(str.length - index - 1)
    })
}

module.exports = palindrome;
