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
    const cycle = (level) => {
        const sideSpaces = n - level;
        const toPrint = 
            ' '.repeat(sideSpaces) +
            '#'.repeat(level === 1 ? 1 : level * 2 - 1) +
            ' '.repeat(sideSpaces);
        
        console.log(toPrint);

        if (level < n) {
            cycle(level + 1)
        }
    }
    cycle(1);
}

module.exports = pyramid;
