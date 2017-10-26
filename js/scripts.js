// Business or Backend Logic

// For reference only:
// var romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
// var numbers = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"]
var singles = ["I", "IV", "V", "IX"]
var tens = ["X", "XL", "L", "XC"]
var hundreds = ["C", "CD", "D", "CM"]
var thousands = ["M"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Output function of below. Write these to loop through more complicated if/else statements
var single = function(userInput){
  if (single <= 3)
  return console.log(test.repeat(userInput[0]);
}
var double = function(userInput){

}
var triple = function(userInput){

}
var quad = function(userInput){

}

// function and if/else to determine whether input number was single, double, triple or quadruple digits.
var length = function(userInput){
  if (userInput.length === 1) {
    single(userInput);

} else if (userInput.length === 2) {
    double(userInput);

} else if (userInput.length === 3) {
    triple(userInput);

} else (userInput.length === 4)
    quad(userInput);
}

// User Interface or Frontend Logic Here
$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();
    var userInput = $("input#digits").val();

    // var double = $("#doubleInput").val();
    // var triple = $("#tripleInput").val();
    // var quad = $("#quadInput").val();
    $("#result").append(length(userInput));

  })
})
