console.log('Looping Structures');

function minMax() {
    const numbers = [4, 10, 7, 26, 15];
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return min + max;
}
console.log(minMax());
