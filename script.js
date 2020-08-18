// while loop
function count(){
    let x = 0
    while (x < 11){
        document.getElementById("output1").innerHTML += (x+" ");
        x++
    }
}

// do while loop
function anotherCount(){
    let i = 10
    do{
        document.getElementById("output2").innerHTML += (i+" ");
        i--
    }while(i > -1)
}

// for loop
function forLoop(){
    for(i = 0; i < 101; i+=10){
        document.getElementById("output3").innerHTML += (i+" ")
    }
}

// Array Declaration (3 differant methods)
var airlines = new Array()
airlines[0] = "Delta"
airlines[1] = "Virgin"
airlines[2] = "Ryanair"

var family = new Array("Brendan", "William", "Senan")

var country = ["Spain", "Italy", "England"]

function array(){
    document.getElementById("output4").innerHTML = family[0]+" is flying to "+country[1]+" with "+airlines[2]
}

// Looping Through an Array
let fruits = ["apple", "banana", "orange", "pear", "pineapple"]
function arrayLoop(){
    let len = fruits.length
    for(i = 0; i < len; i++){
        document.getElementById("output5").innerHTML += fruits[i] + " "
    }
}

// Functions with values
function checkPW(pw){
    if (pw == "raining"){
        document.getElementById("pwStatus").innerHTML = "That is the correct password";
        document.getElementById("pwStatus").style.backgroundColor = "rgb(0,255,0)";
    }else{
        document.getElementById("pwStatus").innerHTML = "That password input of "+pw+" is incorrect";
        document.getElementById("pwStatus").style.backgroundColor = "rgb(255,0,0)";
    }
}

//Custom Object Creation

var dog = new Object()
dog.name = "ike"
dog.gender = "male"
dog.age = 11
dog.breed = "retreiver"

function dogObject(){
    document.getElementById("output6").innerHTML = "My dogs name is "+dog.name+" he is "+dog.age
}

// Form Validation

function validation()
{
    let capture = document.forms["input"]["fname"].value + "<br>";     //input refers to the form ID, fname refers to the first input field ID
    capture += document.forms["input"]["color"].value + "<br>";
    capture += document.forms["input"]["icecream"].value + "<br>";
    if (document.forms["input"]["yes"].checked)                        // if statement required for check box
    {
        capture += document.forms["input"]["yes"].value + "<br>"
    }
    else
    {
        capture += document.forms["input"]["no"].value + "<br>"
    }
    document.getElementById("outputDiv").innerHTML = capture;
}

// taking user input and manipulating

function numAddition()
{
    let newVal = parseInt(document.getElementById("number").value);
    newVal += 5;
    document.getElementById("outputNum").innerHTML = newVal
    document.getElementById("outputNum").style.color = "red";
}

// Fizz Buzz
function fizzBuzz()
{
    for (let i = 1; i < 100; i++)
    if ( i % 5 == 0 && i % 3 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "fizzbuzz" + "<br>" 
    }
    else if ( i % 5 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "buzz" + "<br>" 
    }
    else if ( i % 3 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "fizz" + "<br>" 
    }
    else
    {
       document.getElementById("fizzOutput").innerHTML += i + "<br>"
    }
}

// fizzbuzz with user input

function outputFizzBuzz()
{
    let newVal = parseInt(document.getElementById("fbInput").value)
    for (let i = 1; i <= newVal; i++)
    if ( i % 5 == 0 && i % 3 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "fizzbuzz" + "<br>" 
    }
    else if ( i % 5 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "buzz" + "<br>" 
    }
    else if ( i % 3 == 0)
    {
       document.getElementById("fizzOutput").innerHTML += "fizz" + "<br>" 
    }
    else
    {
       document.getElementById("fizzOutput").innerHTML += i + "<br>"
    }
}

 // Changing heading colors

function changeColor()
    {
        
        let x = document.getElementsByTagName("h2").style.color = "blue"
        document.getElementsByTagName("h2").style.color = x
    }

let timestamp = new Date();
console.log(timestamp);
console.log(timestamp.toString());

// Object Literals
const person = 
{
    firstName : "john",
    lastName : "doe",
    age : 30,
    hobbies : ["music", "movies", "sport"],
    address : 
    {
        street : "50 main st",
        city : "boston",
        state : "maine"
    }
}
person.email = "john@gmail.com"  // adding a property to an object literal

//  Arrays with objects
const toDos = 
[
    {
        id : 1,
        text : "take out trash",
        isCompleted : true
    },
    {
        id : 2,
        text : "wash the dishes",
        isCompleted : true
    },
    {
        id : 3,
        text : "cut the lawn",
        isCompleted : false
    }
]

const todoJSON = JSON.stringify(toDos);  // how to convert data to JSON format

console.log(toDos)
console.log(toDos[1].text)

// For Loops
for (let i = 0; i < 10; i++)
{
    console.log(`for loop number: ${i}`)
}

// While Loops
let i = 0;
while (i < 10)
{
    console.log(`while loop number: ${i}`)
    i++
}

// Iterating through an array method 1
for (let i = 0; i < toDos.length; i++)
{
    console.log(toDos[i].text)
}
// Iterating through an array method 2
// creates a temporary variable to be used to iterate through the array
for (let tempVar of toDos)
{
    console.log(tempVar.text)
}
// High Order Array Methods used for iterating through an array
// forEach, map, filter
toDos.forEach(function(todo)    // todo is a temporary variable
{
    console.log(todo.text)
})
// to make a new array from an existing array use .map
const todoId = toDos.map(function(todo)
{
    return todo.id
})
console.log(todoId)
// to filter through an array based on certain requirements
const todoCompleted = toDos.filter(function(todo)
{
    return todo.isCompleted === true
})
console.log(todoCompleted)

// conditional statements
const x = 12;
if (x === 10){
    console.log(`x is equal to 10, it is ${x}`)
}
else if (x > 10)
{
    console.log(`x is greater than 10, it is ${x}`)
}
else{
    console.log(`x is less than 10, it is ${x}`)
}

//Ternary Operator
const tern = 10
const color = tern > 10 ? "red" : "blue"  // is tern variable greater than 10? assign red if it is true, else blue if it is false.

//switch statement
switch (color)
{
    case "blue":
        console.log("the color is blue")
        break
    case "red":
        console.log("the color is red")
        break
    default:
        console.log("the color is not red or blue")
}

//functions
function addNum(num1, num2){
    return num1 + num2
}
console.log(addNum(10, 12));

const addNums = (num1, num2) =>{
    return num1 + num2
}
console.log(addNums(15, 23))

// Object Orientated Programming
// Constructor function     // this acts as a template for making person objects
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){                 // creating a method
        return this.dob.getFullYear()               
    }
}

// to create a method for an object and to store it in the prototype section of that object
Person.prototype.getFullName = function(){                  // creating a method which is stored in prototype and does not immediately show in the console
        return `${this.firstName} ${this.lastName}`
    }

// instantiate object using our constructor function template
const person1 = new Person("mike", "raphone", "4-3-1980")
const person2 = new Person("annette", "curtain", "7-3-1970")

person2.email = "annette@gmail.com"     // adding to an object

console.log(person1)
console.log(person1.getFullName())      // calling differant methods which we created
console.log(person2.getBirthYear())

// creating a class which is similar to an object
class Car
{
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getSpecs(){
        return `the specs for this car are ${this.make} ${this.model} ${this.year}`
    }
}

const car1 = new Car("VW", "Passat", "2008")
console.log(car1)
console.log(car1.getSpecs())
