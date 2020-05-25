// JavaScript File

document.getElementById("submitguess").onclick = function() {
var number = document.getElementById("number");
if (number < 0) {
  alert("Your number is negative!");
}
else if (number > 0) {
  alert("Your number is positive");
}
else {
  alert("Please type in a number first!");
}
};