/*
Sunday is market day. Early in the morning many people move to the Parangaba square where happens a fair, known to be the largest in the city. At the fair the Parangaba you can find everything.

Every Sunday, Bino make purchases at the fair. He always mark with his friend Cino, they met at the bus terminal of Parangaba at 8 am to go together to buy at the fair. But often Bino wake up too late and is late for the meeting with his friend.

Knowing that Bino takes 30-60 minutes to reach the terminal. Tell the maximum delay Bino.

Input
The input consists of multiple test cases. Each case contains a single line containing a time H (5:00 ≤ H ≤ 9:00) that Bino woken up. The input ends with the final file (EOF).

Output
For each test case, print "Atraso maximo: X" (without quotes), X indicates the maximum delay (in minutes) of Bino in the encounter with Cino.
*/
const input = require('fs').readFileSync('URI_2003_stdin', 'utf8');
const inputLines = input.split('\n');

const terminalTime = 8;

do{
   
    const [ hour , min ] = inputLines.shift().split(':').map(Number);
    if(typeof hour === 'number' & typeof min === 'number'){
        if( hour <= 6 || (hour === 7 & min === 0)){
        console.log('Atraso maximo: 0');
        }else{ 
        
        const lateMin = ((hour + 1) - terminalTime) * 60 + min;
        console.log('Atraso maximo: ' + lateMin);
   
        }
    }
}while(inputLines.length > 0);