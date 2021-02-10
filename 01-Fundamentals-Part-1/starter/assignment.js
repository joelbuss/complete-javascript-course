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
    let markWeight1 = '78';
    let markHeight1 = '1.69 ';
    let johnWeight1 = '92'; 
    let johnHeight1 = '1.95'; 

    const markBMI1 =  markWeight1 / (markHeight1 ** 2); 
    console.log(markBMI1); 
    const johnBMI1 = johnWeight1 / (johnHeight1 ** 2); 
    console.log(johnBMI1); 

    const markHigherBMI = markBMI1 > johnBMI1; 
    console.log(true); 

    // Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    // m tall.
    let markWeight2 = '95';
    let markHeight2 = '1.88 ';
    let johnWeight2 = '85'; 
    let johnHeight2 = '1.76';
    
    const markBMI2 = markWeight2 / (markHeight2 ** 2); 
    console.log(markBMI2); 
    const johnBMI2 = johnWeight2 / (johnHeight2 ** 2); 
    console.log(johnBMI2); 

    const johnHigherBMI = (johnBMI2 > markBMI2); 
    console.log(true); 
    */

    


    

