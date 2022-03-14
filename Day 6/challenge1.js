// Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i < 11; i++){
    console.log(i)
}

let i = 0
while (i<=10){
    console.log(i)
    i++
}

let i = 0 
do {
    console.log(i)
    i++
} while (i <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i > 0; i--) {
    console.log(i)
}

let i = 10
while (i>=0){
    console.log(i)
    i--
}

let i = 10
do {
    console.log(i) 
    i--
}while (i >= 0)

for(let i = 0; i < n; i++){
    console.log(i)  
}

/*Write a loop that makes the following pattern using console.log():
*****Don't run this shit! It will break all your browsers and send your information to the CIA. Whatever Youtube tutoiral I watched was on magic and not a for loop for pattern.*****
*/
for(let i = 0; i <= 5; i++)
{
    for(let j = 1; i <= i; j++)
    {
        console.log("*");
    }
 console.log("<br>");
}

// Use loop to print the following pattern:

/* Okay, so this shit works for some God forsaken reason. When I run it in the console on a web browswer my output looks like this...
1 * 0 = 0
​ 1 * 1 = 1
​ 1 * 2 = 4
​ 1 * 3 = 9
​ 1 * 4 = 16
​ 1 * 5 = 25
​ 1 * 6 = 36
​ 1 * 7 = 49
​ 1 * 8 = 64
​ 1 * 9 = 81
​ 1 * 10 = 100
and so on and so forth. Now, I'm pretty sure the computer knows that the inital '1' at the begining of every equation is actually incrememnting... because the math says it is bitch. Anyway, Ask why its like this.

*/
for(let i = 0; i <= 10; i++){
    console.log(`${1} * ${i} = ${i * i}`)
}

/*
Use for loop to iterate from 0 to 100 and print only even numbers*/
function even(){
    for (let i = 1; i<= 100; i++){
        if(i% 2==0){
            console.log(` ${i}`)
        }
       
    }
}
even();



/*Use for loop to iterate from 0 to 100 and print only odd numbers*/

function odd(){
    for (let i = 1; i<= 100; i+=2){
        if(i% 1==0){
            console.log(` ${i}`)
        }
       
    }
}
odd();

/*Use for loop to iterate from 0 to 100 and print only prime numbers

Use for loop to iterate from 0 to 100 and print the sum of all numbers.

/*The sum of all numbers from 0 to 100 is 5050.*/

let i = 0;
let sum = 0;
while (i <= 100){
    sum = sum +i;
    i=i+1;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

/*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
 */

  Array.from({length: 5}, () => Math.floor(Math.random() * 5));

  var arr = [];
  while(arr.length < 5){
      var r = Math.floor(Math.random() * 5) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);

  function makeid(length) {
    var result           = '';
    var id      = '5j2khz';         
    var charactersLength = id.length;
    for ( var i = 0; i < length; i++ ) {
      result += id.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));




function makeid(length) {
    var result           = '';
    var id      = 'e3jo1gl124g';         
    var charactersLength = id.length;
    for ( var i = 0; i < length; i++ ) {
      result += id.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));


function makeid(length) {
    var result           = '';
    var id      = 'xkqci4utda1lmbelpkm03rba';         
    var charactersLength = id.length;
    for ( var i = 0; i < length; i++ ) {
      result += id.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));



function makeid(length) {
    var result           = '';
    var id      = '#ee33df';         
    var charactersLength = id.length;
    for ( var i = 0; i < length; i++ ) {
      result += id.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));


function makeid(length) {
    var result           = '';
    var id      = 'rgb(240,180,80)';         
    var charactersLength = id.length;
    for ( var i = 0; i < length; i++ ) {
      result += id.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));

