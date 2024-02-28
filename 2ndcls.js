// Write code: Suppose you have a login system where you can log in by using only any of three names.

// 1) Determine three names inside your code.'
// 2) Write a code that takes the user input.
// 3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome! “.
// *

var prompt = require('prompt-sync') (); 

var name = prompt("enter your name")


if(name == "Rahi"){
    console.log("Welcome!" )
}

else if (name == "Paul"){
    console.log("Welcome!")
 }

 else if(name == "Oishi"){
    console.log("Welcome!")
 }

 else {
    console.log("Sorry! We don’t find you in the system."  )
 }
 
// Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.


var prompt = require('prompt-sync') (); 
    var year = prompt("enter a year")
    if (year%4 == 0) {
        console.log("the year is a leap year")
    }
    else  {
        console.log("the year is not a leap year")
    }
 
// Create a simple shopping cart program. The program should:

// 1) Prompt the user to enter the price of three items one by one.

// 2) Apply a discount based on the total cost:

// 3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

// 4) Display the final cost after applying the discount.



var prompt = require('prompt-sync') (); 
var a = Number(prompt("enter price of a"));
var b = Number(prompt("enter price of b"));
var c = Number(prompt("enter price of c"));
var totalcost = a+b+c
console.log( "Total cost of the item is:", totalcost)
if(totalcost> 100){
    var discount = 20/100
    var discount = totalcost - (totalcost * discount);
console.log("Final cost:", discount);
}
else if(totalcost> 50){
    var discount = 10/50
    var discount = totalcost - (totalcost * discount);
console.log("Final cost:", discount);
}
 
// Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

// 1) Prompt the user to enter the scores for three subjects: Math, English, and Science.

// 2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.

// 3) Display the final average score.

// 4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:

// A:  > 60 

// F: <60

// *

var prompt = require('prompt-sync') (); 
var mathscore = Number(prompt("enter the score of math: "));
var englishscore = Number(prompt("enter the score of english: "));
var sciencescore = Number(prompt("enter the score of science: "));
var average = (mathscore + englishscore + sciencescore)/3
console.log("Final average score is " + average);
if (average>60){
    console.log("letter grade is A" );
}
else {
    console.log("letter grade is F" );
}