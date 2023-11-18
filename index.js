// Question 1A
// Here is a array of ages

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("ages", ages)

//remove the first number in the array from the last number

let agesSubtracted = ages [ages.length -1] - ages[0];
console.log("agesSubtracted", agesSubtracted)

// Question 1B
//push a value to the Array

ages.push(25)
console.log("pushed value", ages)
let agesSubtractedPush = ages [ages.length -1] - ages[0];
console.log("agesSubtractedPush", agesSubtractedPush)

// Question 1C
// make a loop that calculates the average, concantonat the names with spaces

let sumOfAges = 0;


for (let i = 0; i < ages.length; i++){
    sumOfAges += ages [i]
    console.log("index", i, "sumOfAges", sumOfAges);
}

console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length
console.log("average", average);


// Question 2A
// create an array of names

let names = ["Sam", "Tommy", "Tim", "Sally", "Bob"];
let totalChars = 0;

// Make a loop and calculate the average number of letters per name
for (let i = 0; i < names.length; i++ ){
    totalChars += names[i].length
    console.log("index", i, "name", names[i], "totalChars", totalChars)
}
let averageName = totalChars / names.lemgth;
console.log("average of Names", averageName)

// Question 2B
// loop again and concatenate all the names together 

let concatNames = "";
for (let i = 0; i < names.length; i++){
    console.log(i, "text")
concatNames = concatNames.concat(names[i] + " ");
console.log(i, "Names concatenated", concatNames);
}

// How do you access the last element of any array?

console.log ("Last element of ages array", ages[ages.length - 1]);

// How do you access the first element of any array?

console.log ("First element of ages array", ages[0]);

// Question 5
// create a new array called nameLengths
// loop over Names array and add the names to nameLengths array 

let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
    console.log("Name lengths", nameLengths);
}

// Question 6
// calculate the sum of elements in nameLengths array

let charsTotal = 0; 
for(let i = 0; i < nameLengths.length; i++){
    charsTotal += nameLengths[i];
    console.log("charsTotal;", charsTotal)
}

// Question 7
// create a function with two parameters with a return of a 'cat' repeated 6 times

function concatWords(word, n){
    console.log("par 1", word, "par 2", n);
    let concat = word.repeat(6);
    console.log(concat);
}
concatWords("cat", 6)

// Question 8
// create a function to find fullName using the parameters firstName and lastName

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("Noah", "Price")

// Question 9
// create a function for an array of numbers and return true if the sum is greater than 100

let numbers1 = [100, 800, 1000, 300];


function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i < array.length; i++){
        // console.log(i, "test");
        total += array[i];
        console.log("total", total);
    } 

if (total > 100 ){
    console.log(true);
    return true
}else{
    console.log(false);
    return false
}

}

sumNumbersArray(numbers1);

// Question 10
// create a function that takes a array of numbers and returns the average of those numbers

function calculateNumbersAverage(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        // console.log(i, "Test");
        total += array[i];
        console.log("calculate Function, total:", total)       
    }

    let average = total / array.length
    console.log("average of Numbers:" , average);
    return average; 
}
calculateNumbersAverage(numbers1)

// Question 11
// create a function cehcking two arrays of numbers and returns if the first arrays average is larger then teh second array

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages (array1, array2){
    console.log("parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
for (const number of array1){
    total1 += number
    console.log("current number loop1:", number, "total1:", total1);
}

for (const number of array2){
    total2 += number; 
    console.log("current number loop2:", number, "total2:", total2);
}

let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log( "Averages", average1, average2)

if (average1 > average2){
    console.log(true);
    return true
}else if (averages1 < averages2){
    console.log(false);
    return false;
}else{
    console.log("Numbers are equal");
}
}
twoAverages(numbers3, numbers4)

// Question 12
// create a function willBuyDrink with boolean isHotOutside, and number moneyInPocket, 
// return boolean if it is hot outside and moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket){
    console.log("Parameters", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5; 
    console.log("buy a drink?", buyDrink);
    return buyDrink;
    
    }
    willBuyDrink(true, 11)