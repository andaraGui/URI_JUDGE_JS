/*
Odin created to Thor the most faithful and powerful possible weapon, Mjolnir hammer. Made of a special mystical ore called Uru and forged in the heart of a star by blacksmiths Gods of Asgard , Brokk and Eitri , blacksmiths legendary.

One day , Thor challenged his friends to see who could raise the Mjölnir .

Write a program that , given a name , and the force in Newtons applied to try to lift the Thunder Hammer , inform the person succeeded in lifting it .

Input
An integer C shall be informed , which is the amount of test cases. Each test case begins with one word , which is the first name of who is trying to raise Mjölnir , and an integer N ( 1 ≤ N ≤ 25000 ), indicating the force applied upward in Newtons to pull the hammer of so try to lift it.

Output
For each test case print a 'Y' character , if the person has managed to raise or 'N' if you have not achieved .
*/
const input = require('fs').readFileSync('URI_1865_stdin', 'utf8');
const inputLines = input.split('\n');
const quant = parseInt(inputLines.shift());

for(let x = 0 ; x < quant ; x++){
    const [name , str] = inputLines.shift().split(' ');
    if(name === 'Thor'){
        console.log('Y');
    }else{
        console.log('N');
    }
}