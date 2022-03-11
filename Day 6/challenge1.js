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
for(let i = 0; i <= 4; i++)
{
    for(let j = 0; i <= 4; j++)
    {
        console.log("*");
    }
 console.log("</br>");
}

// Use loop to print the following pattern:

/* Okay, so this shit works for some God forsaken reason. When I run it in the console on a web browswer my output looks like this...
1 * 0 = 0
​ 1 * 1 = 1
​ 1 * 2 = 4
​ 1 * 3 = 9
​ 1 * 19 = 361
​ 1 * 20 = 400
​ 1 * 21 = 441
​ 1 * 22 = 484
​ 1 * 23 = 529
​ 1 * 24 = 576
​ 1 * 25 = 6
and so on ans so forth. Now, I'm pretty sure the computer knows that the inital '1' at the begining of every equation is actually incrememnting... because the math says it is bitch. Anyway, Ask why its like this.

*/
for(let i = 0; i <= 25; i++){
    console.log(`${1} * ${i} = ${i * i}`)
}

/*
Use for loop to iterate from 0 to 100 and print only even numbers

Use for loop to iterate from 0 to 100 and print only odd numbers

Use for loop to iterate from 0 to 100 and print only prime numbers

Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
 */




