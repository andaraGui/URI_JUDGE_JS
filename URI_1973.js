/*
After buying many adjacent farms at the west region of Santa Catarina, the Star family built a single road which passes by all farms in sequence. The first farm of the sequence was named Star 1, the second Star 2, and so on. However, the brother who lives in Star 1 has got mad and decided to make a Star Trek in order to steal sheep from the proprieties of his siblings. But he is definitely crazy. When passes by the farm Star i, he steals only one sheep (if there is any) from that farm and moves on either to Star i + 1 or Star i - 1, depending on whether the number of sheep in Star i was, respectively, odd or even. If there is not the Star to which he wants to go, he halts his trek. The mad brother starts his Star Trek in Star 1, stealing a sheep from his own farm.

Input
The first input line consists of a single integer N (1 ≤ N ≤ 106), which represents the number of Stars. The second input line consists of N integers, such that the ith integer, Xi (1 ≤ Xi ≤ 106), represents the initial number of sheep in Star i.

Output
Output a line containing two integers, so that the first represents the number of Stars attacked by the mad brother and the second represents the total number of non-stolen sheep.
*/
const input = require('fs').readFileSync('URI_1973_stdin', 'utf8');
const inputLines = input.split('\n');

const numberOfStars = parseInt(inputLines.shift());
const sheepsInStar = inputLines.shift().split(' ').map(Number);

let sheepsStolen = 0;
let i = 0;
let allSheeps = sheepsInStar.reduce( (a , b) => a + b , 0 );
let count = 0;
do {

    if(i >= count){
        count++
    }
    
    if (sheepsInStar[i] === 0) {
        break;
    } else if (sheepsInStar[i] % 2 === 0) {//if its even
        sheepsStolen++;
        sheepsInStar[i]--;
        i--;
        
    } else {//if its odd
        sheepsStolen++;
        sheepsInStar[i]--;
        i++;
    }

    
} while (i !== numberOfStars  && i >= 0);
console.log(count + ' ' + (allSheeps - sheepsStolen))