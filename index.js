/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 20;
if (votingAge >=18) {
    console.log("I can vote, it's  " + true + ".")
} else {
    console.log(false)
}
console.log(votingAge >=18)

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let drivingAge
const age = 40
if (age>=16){
    drivingAge = true
}
else {
    drivingAge = false
}
console.log(drivingAge)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999"
let integer = Number(string);
console.log(integer)



//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return a * b
}
console.log(multiply(20,50))



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function toDogYears(age) {
    return age*7
}
console.log(toDogYears(5));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weightInPounds in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw foodPerDay to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weightInPounds
// 6 - 10 lbs - 4% of their body weightInPounds 
// 11 - 15 lbs - 3% of their body weightInPounds 
// > 15lbs - 2% of their body weightInPounds 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weightInPounds
// 4 - 7 months 5% of their body weightInPounds 
// 7 - 12 months 4% of their body weightInPounds



function amountOfFood(weightInPounds, ageInYears) {
    
    let foodPerDay;
    if (ageInYears >= 1) {
        if (weightInPounds <= 5) {
            foodPerDay = weightInPounds * .05;
        } else if ((5 < weightInPounds) && (weightInPounds <= 10)) {
            foodPerDay = weightInPounds * .04;
        } else if ((10 < weightInPounds) && (weightInPounds <= 15)) {
            foodPerDay = weightInPounds * .03;
        } else {
            foodPerDay = weightInPounds * .02;
        }
    } else {
        if ((2/12 < ageInYears) && (ageInYears <= 4/12)) {
            foodPerDay = weightInPounds * .10;
        } else if ((4/12 < ageInYears) && (ageInYears <= 7/12)) {
            foodPerDay = weightInPounds * .05;
        } else if ((7/12 < ageInYears) && (ageInYears <= 12/12)) {
            foodPerDay = weightInPounds * .04;
        } else {
            foodPerDay = 0;
            console.log("The dog is younger than 2 months and gets milk.")
        } 
    }

    return foodPerDay;
}

// when you are finished invoke your function with the weightInPounds of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
const weightInPounds = 15;
const ageInYears = 1;

foodInPounds = amountOfFood(weightInPounds, ageInYears); 

console.log(foodInPounds);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// function whoWins(...
// you might want to try function whoWins(person1, person2) {} // and the values passed in are "rock", "paper", or "scissors".
function whoWins(playerOption) {
    // rock=1, paper = 2, scissors = 3
    let computerNumber = Math.floor(Math.random() * 3 + 1);
    let player = 0;
    if (playerOption.toLowerCase() == "rock") {
        player = 1;
    } else if (playerOption.toLowerCase() == "paper") {
        player = 2;
    } else if (playerOption.toLowerCase() == "scissors") {
        player = 3;
    } else {
        alert(playerOption,"is not allowed!");
    }
    if (computerNumber === 1 && player === 1) {
        console.log("tie game");
    } else if (computerNumber === 2 && player ===2) {
        console.log("tie game");
    } else if (computerNumber === 3 && player ===3) {
        console.log("tie game");
    } else if (computerNumber === 1 && player ===2) {
        console.log("player wins");
    } else if (computerNumber === 1 && player ===3) {
        console.log("computer wins");
    } else if (computerNumber === 2 && player ===1) {
        console.log("computer wins");
    } else if (computerNumber === 2 && player ===3) {
        console.log("player wins");
    } else if (computerNumber === 3 && player ===1) {
        console.log("player wins");
    } else if (computerNumber === 3 && player ===2) {
        console.log("computer wins");
    } 
}   
whoWins ("paper")



  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometerToMiles(Number){
    return (Number * 0.6214);
}
console.log(kilometerToMiles(1));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function  feetToCentimeters(Number){
    return (Number * 30.48);
}
console.log(feetToCentimeters(1));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startingNumber){
    for (let currentBottles = startingNumber; currentBottles > 0; currentBottles--){
        console.log(currentBottles,"bottles of soda on the wall,",currentBottles," bottles of soda, take one down pass it around",currentBottles-1,"bottles of soda on the wall")
    }
}
annoyingSong(99)


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function percentToLetterGrade(percent){
    if ((percent <=100) && (percent >=90)){
        return "A";
    } else if ((percent <=89) && (percent >=80)){
        return "B"
    } else if ((percent <=79) && (percent >=70)){
        return "C"
    } else if ((percent <=69) && (percent >=60)){
        return "D"
    } else if ((percent <=59) && (percent >=0)){
        return "F"
    }
}
console.log(percentToLetterGrade(73))  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





