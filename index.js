// JavaScript File

document.getElementById("submitguess").onclick = function() {
var input = document.getElementById("input");
var inputvalue = input.value;

 if (input.value < 0) {
   alert("Your number is negative!");
}
 else if (input.value > 0) {
   alert("Your number is positive!");
}
 else {
  alert("Please type in a number first!");
}
};