// Lecture: Values and Variables 

const country = 'United States';
const continent = 'North America'; 
let population = '331.42 '; 

console.log(country);
console.log(continent); 
console.log(population); 

// Lecture: Data Types & let, const and var

const isIsland = false; 
const language = 'English';

// console.log(typeof isIsland);
// console.log(typeof population)
// console.log(typeof country); 
// console.log(typeof language); 

//Lecture: Basic Operatpors 

console.log(population / 2);
population++;
console.log(population > 6); 
console.log(population > 33); 
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1); 

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
     1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.


Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    m tall.
    let massMark = '78';
    let heightMark = '1.69 ';
    let massJohn = '92'; 
    let heightJohn = '1.95'; 

    const markBMI =  massMark / (heightMark ** 2); 
    console.log(markBMI); 
    const johnBMI = massJohn / (heightJohn ** 2); 
    console.log(johnBMI); 
    const markHigherBMI = markBMI > johnBMI; 
    

const age = 15; 

if (age >= 18) { 
    console.log('Sarah can start driving license 🚗'); 
} else { 
    const yearsLeft = 18 - age; 
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012; 

let century; 
if(birthYear <= 2000) {
    century = 20; 
} else {
    century = 21;
}
console.log(century); 

// CODING CHALLENGE #2

    let massMark = '78';
    let heightMark = '1.69';
    let massJohn = '92'; 
    let heightJohn = '1.95'; 

    const markBMI =  massMark / (heightMark ** 2); 
    console.log(markBMI); 
    const johnBMI = massJohn / (heightJohn ** 2); 
    console.log(johnBMI); 
    
if(markBMI >= johnBMI) { 
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
} else { 
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)
}

// Type Conversion
const inputYear = '1991'; 
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18); 

console.log(Number('Jonas')); 
console.log(typeof NaN); 

console.log(String(23), 23); 

// Type Coercion 
console.log('I am ' + 23 + 'years old')
console.log('23' - '10' - 3);
console.log('23' / '2'); 
console.log('23' > '18'); 
*/


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// const dolphines = 'average score'; 
// const koalas = 'average score';

// let dolphine1 = 96; 
// let dolphine2 = 108; 
// let dolphine3 = 89;

// let koalas1 = 88; 
// let koalas2 = 91;
// let koalas3 = 110;

// const avScoreDolphines = (dolphine1 + dolphine2 + dolphine3) / 3; 
// console.log(avScoreDolphines); 

// const avScoreKoalas = (koalas1 + koalas2 + koalas3) / 3; 
// console.log(avScoreKoalas); 

// if (avScoreDolphines > avScoreKoalas){ 
//     console.log('Dolphines win!!');
// } else {
//     console.log('Koalas win!!');
// };

// BONUS 1
const dolphines = 'average score'; 
const koalas = 'average score';

let dolphine1 = 97; 
let dolphine2 = 112; 
let dolphine3 = 101;

let koalas1 = 109; 
let koalas2 = 95;
let koalas3 = 123;

const avScoreDolphines = (dolphine1 + dolphine2 + dolphine3) / 3; 
console.log(avScoreDolphines); 

const avScoreKoalas = (koalas1 + koalas2 + koalas3) / 3; 
console.log(avScoreKoalas); 

if (avScoreDolphines > avScoreKoalas){ 
    console.log('Dolphines win!!');
} else {
    console.log('Koalas win!!');
};