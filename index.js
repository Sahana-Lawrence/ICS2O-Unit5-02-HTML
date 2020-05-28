// JavaScript File

document.getElementById("submitguess").onclick = function() {
var input = document.getElementById("input");
if (input < 0) {
  alert("Your number is negative!");
}
else if (input >= 0) {
  alert("Your number is positive!");
}
else {
  alert("Please type in a number first!");
}
};