var shareInfo = confirm("Do you agree to share your personal information?");

if (shareInfo == true) 
{
    console.log("Name: " + fn);
    console.log("Height: " + height);
    console.log("Weight: " + weightInKg + " kg");
} 
else 
{
    console.log("User does not wish to share his/her information.");
}
