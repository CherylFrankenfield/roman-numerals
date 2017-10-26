// Business or Backend Logic

// For reference only:
// var romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
// var numbers = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"]
var singles = ["I", "IV", "V", "IX"]
var tens = ["X", "XL", "L", "XC"]
var hundreds = ["C", "CD", "D", "CM"]
var thousands = ["M"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// User Interface or Frontend Logic Here
$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();
    var userInput = $("input#digits").val();


    var single = "";
    var double = "";
    var triple = "";
    var quad = "";
    // var double = $("#doubleInput").val();
    // var triple = $("#tripleInput").val();
    // var quad = $("#quadInput").val();

    if (userInput.length === 1) {
        for (index = 0; index <= numberArray.length; index++) {
          if (numberArray[i] === userInput) {

          }
          return numberArray
          // alert(numberArray);
        }
      // alert("single");
    } else if (userInput.length === 2) {
      userInput = double
      // alert("double");
    } else if (userInput.length === 3) {
      userInput = triple
      // alert("triple");
    } else {
      (userInput.length === 4)
      userInput = quad
      // alert("quad");
    }



  // $("#result").append("<p>" + romanResult + "</p>");
});
});
