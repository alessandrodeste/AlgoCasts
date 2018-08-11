// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxChar = '';
    let maxNr = 0;
    str.split('').reduce((acc, c) => {
        // undefined + 1 == NaN
        const current = acc[c] + 1 || 1;
        if (current > maxNr) maxChar = c;
        return {
            ...acc,
            [c]: current,
        }
    }, {});
    return maxChar;
}

module.exports = maxChar;
