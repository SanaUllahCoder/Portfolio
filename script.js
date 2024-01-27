// Assignment Number One

// Declare variables
var age = 25;  // Replace with your actual age
var isStudent = false;  // Replace with true if you are a student, otherwise false

// Print values to the console
console.log("Age:", age);
console.log("isStudent:", isStudent);

    var greeting = "Welcome to Our Website!";
    var introduction = "Hello there! Thank you for visiting. We hope you enjoy your time here.";

    // Concatenate greeting and introduction
    var welcomeMessage = greeting + "\n\n" + introduction;

    // Display welcome message using alert
    alert(welcomeMessage);

// Assignment Number Two


    // Declare variables
    var length = 10;  // Replace with the actual length of the rectangle
    var width = 5;    // Replace with the actual width of the rectangle

    // Calculate the area
    var area = length * width;

    // Print the calculated area to the console
    console.log("The area of the rectangle is: " + area);


    // Use the prompt method to get user input
    var userName = prompt("What is your name?");

    // Check if the user provided a name
    if (userName !== null && userName !== "") {
        // Display personalized greeting using alert
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        // Display a default greeting if no name is provided
        alert("Hello! Welcome to our website.");
    }


// ASSIGNMENT NUMBER 3

// Prompt the user to enter the current temperature in Celsius
var temperatureCelsius = prompt("Enter the current temperature in Celsius:");

// Convert the input to a number
var temperature = parseFloat(temperatureCelsius);

// Check if the temperature is above 30 degrees
if (temperature > 30) {
    // Display an alert for a hot day
    alert("It's a hot day!");
} else {
    // Display an alert for moderate weather
    alert("The weather is moderate.");
}


// ASSIGNMENT NUMBER 3(a)

// Prompt the user to enter marks for three subjects
var marksSubject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var marksSubject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var marksSubject3 = parseFloat(prompt("Enter marks for Subject 3:"));

// Calculate the average
var averageMarks = (marksSubject1 + marksSubject2 + marksSubject3) / 3;

// Determine the grade based on the average
var grade;

if (averageMarks >= 90) {
    grade = 'A';
} else if (averageMarks >= 80) {
    grade = 'B';
} else if (averageMarks >= 70) {
    grade = 'C';
} else if (averageMarks >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

// Display the results
console.log("Marks in Subject 1: " + marksSubject1);
console.log("Marks in Subject 2: " + marksSubject2);
console.log("Marks in Subject 3: " + marksSubject3);
console.log("Average Marks: " + averageMarks);
console.log("Grade: " + grade);


// ASSIGNMENT NUMBER 4

// Prompt the user to enter a number
var inputNumber = parseInt(prompt("Enter a number:"));

// Check if the entered value is a valid number
if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Display the multiplication table for the entered number
    console.log("Multiplication Table for " + inputNumber + ":");
    
    for (var i = 1; i <= 10; i++) {
        var result = inputNumber * i;
        console.log(inputNumber + " * " + i + " = " + result);
    }
}


// ASSIGNMENT NUMBER 4(a)

// Initialize variables
var number = 5; // the number for which we want to find the factorial
var factorial = 1;
var i = 1;

// Calculate factorial using a while loop
while (i <= number) {
    factorial *= i;
    i++;
}

// Display the result
console.log("The factorial of " + number + " is: " + factorial);


// ASSIGNMENT NUMBER 5

// Define the greetUser function
function greetUser(userName) {
    return "Hello, " + userName + "! Welcome!";
}

// Prompt the user for their name
var userEnteredName = prompt("Enter your name:");

// Check if the user entered a name
if (userEnteredName) {
    // Call the greetUser function and display the greeting
    var greeting = greetUser(userEnteredName);
    alert(greeting);
} else {
    // Display an alert if the user did not enter a name
    alert("Invalid input. Please enter a valid name.");
}


// ASSIGNMENT NUMBER 4(a)

// Define the isPrime function
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Prompt the user for a number
var userEnteredNumber = parseInt(prompt("Enter a positive integer:"));

// Check if the user entered a valid number
if (!isNaN(userEnteredNumber) && userEnteredNumber > 0) {
    // Call the isPrime function and display the result
    var result = isPrime(userEnteredNumber);
    if (result) {
        alert(userEnteredNumber + " is a prime number!");
    } else {
        alert(userEnteredNumber + " is not a prime number.");
    }
} else {
    // Display an alert for invalid input
    alert("Invalid input. Please enter a positive integer.");
}

