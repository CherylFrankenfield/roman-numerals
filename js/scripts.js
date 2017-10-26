// Business or Backend Logic
var romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
var numbers = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"]


// User Interface or Frontend Logic Here
$(document).ready(function() {
  $("#form").submit(function(event) {
    // var userInput = $("input#digits").val();
    console.log()

    // var single = $("#singleInput").val();
    // var double = $("#doubleInput").val();
    // var triple = $("#tripleInput").val();
    // var quad = $("#quadInput").val();
    debugger;
    if (userInput.length === 1) {
      userInput = single
      alert("single");
    } else if (userInput.length === 2) {
      userInput = double
      alert("double");
    } else if (userInput.length === 3) {
      userInput = triple
      alert("triple");
    } else {
      // (userInput.length === 4)
      userInput = quad
      alert("quad");
    }

    // for (var index = 0; index < userInput.length; index +-1) {
    //   // if (userInput.charAt() = 1) {
    //   }
    // }

  event.preventDefault();

  $("#result").append("<p>" + romanResult + "</p>");
});
});
