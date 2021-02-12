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