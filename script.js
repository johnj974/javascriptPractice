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
        document.getElementsByTagName("h2").style.color = "red";
    }