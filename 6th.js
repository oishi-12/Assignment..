// 1// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.length)

// Here, length is a: property or method of “fruits” array? 



// *

// The output is property


// 2. Create an object called person with properties like name, age, and occupation. Then, write functions to:

// Access and print each of the properties of the person object.

// Modify the value of a specific property (e.g., update age).


// Add a new property (e.g., hobbies).

var people = {
    name: "Rahi",
    age: 23,
    occupation: "student",
    start: function (name){
        return name
    }
}
people.updateage = 35;
people.hobbies = "Programming"

console.log(people.name)
console.log(people.updateage)
console.log(people.occupation)
console.log(people.hobbies)

// 3.var student = { 

//     name: "Your name", 
    
//     age : 22, 
    
//     numbers: [89, 76, 56] 
    
//     } 
    
//     write a method inside the student object that will calculate the average of the numbers.
    
    

var student = { 

    name: "Rahi", 
    
    age : 22, 
    
    numbers: [89, 76, 56],


    Average: function () {
        var sum = 0;
        for (var i = 0; i < this.numbers.length; i++) {
            sum = sum + this.numbers[i]
        }
        var average = sum / this.numbers.length
        return average
    }
};
console.log(student.name)
console.log(student.age)
var avgnumbers = student.Average()
console.log("avgnumbers: " + avgnumbers)
    