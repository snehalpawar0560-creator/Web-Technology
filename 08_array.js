const mi = ["rohit", "tilak", "hardik", "bumrah"];
const csk = ["msd", "ruturaj", "jadeja", "ashwin"];

// concat 2 arrays
const all_players = mi.concat(csk);
console.log(mi);
console.log(csk);
console.log(all_players);

const numbers = [1, 3, 4, [5, 6, 7], [9, 10]];
console.log(numbers[0], numbers[3]);
console.log(numbers[3][2]);
console.log(numbers[4][1]);

const flat_array = numbers.flat(Infinity);
console.log(flat_array);
