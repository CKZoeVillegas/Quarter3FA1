var nickname = "Zoe";
var heightInInches = 65;
var weightInKg = 57;

var feet = heightInInches / 12;
var inches = heightInInches % 12;
var height = parseInt(feet) + "'" + inches;


alert("Name: " + nickname + "\nHeight: " + height + "\nWeight: " + weightInKg + " kg    ");
