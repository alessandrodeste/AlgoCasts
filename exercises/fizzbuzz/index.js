// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    const recursion = (i) => {
        const log = i % 5 === 0 && i % 3 === 0
        ? 'fizzbuzz'
        : i % 3 === 0
        ? 'fizz'
        : i % 5 === 0
        ? 'buzz'
        : i;
        console.log(log);
        if (i < n) recursion(i + 1);
    }
    recursion(1);
}

module.exports = fizzBuzz;
