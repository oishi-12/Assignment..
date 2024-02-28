// Write a function that takes only the name of the user as a parameter and displays a welcome message. The default value of the user's name will be “guest”.

// *


function greet(name_of_user = "Guest"){

    console.log("Hello, welcome!", name_of_user)
}

greet()
greet("Rahi")
greet("Oishi")
greet("Paul")

// Suppose you have an array containing a few numbers, now use the “. map()” method of the array to square all the numbers of the array.

var numb = [1, 2, 3, 4, 5, 6]
squarednum = numb.map(function (num) {
    return num * num
  })

  console.log("Square of all the numbers of the array", squarednum)



//   Suppose we have an equation: Y = x^2 + 2x + 6. Write a function that will take the value of x as a parameter and return the value of Y


 var prompt = require('prompt-sync') (); 
var num = Number(prompt("Enter the number: "))
function eqn(num){
    var x = num
  return Y =  x*x + 2*x + 6

}
var value = eqn(num)
console.log("the value of the equation is: ",value)


// Write a function that will take two numbers and three callback functions as parameters. Calculate the summation, subtraction, and multiplication of the numbers using callback functions. Finally, display the results



var prompt = require('prompt-sync') (); 
var num1 = Number(prompt("Enter the first number: "))
var num2 = Number(prompt("Enter the second number: "))
function add(num1){
    return num1 + 2 
}
function calculate(num1, num2, add, sub, multi){

    return add(num1)  + num2 
}
console.log("The addition of the number by the user is: ", calculate(num1, num2, add, sub, multi ))


function sub(num1){
    return num1 - 2 
}

function calculate(num1, num2, sub){

    return  sub(num1) - num2
}
console.log("The subtraction of the number by the user is: ", calculate(num1, num2,  sub))

function multi(num1){
    return num1 * 2 
}

function calculate(num1, num2, multi){

    return multi(num1) * num2
}
console.log("The multiplication of the number by the user is: ", calculate(num1, num2, multi))
