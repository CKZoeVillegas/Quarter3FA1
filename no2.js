var fn = prompt("Enter your first name:");
var ln = prompt("Enter your last name:");
var birthY = prompt("Enter your birth year:");

var age = 2025 - parseInt(birthY);

var fullName = fn + " " + ln;

var message = "Hello " + fullName + "! How does it feel to be " + age + " years old?";

output.innerHTML = message;
