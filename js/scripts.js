$(document).ready(function() {
  $("#digits").submit(function(event) {
    var userInput = $("#digits").val();


  event.preventDefault();

  $("#result").append("<p>" + romanResult + "</p>");
}
}
