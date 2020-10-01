$(document).ready(function () {
  console.log("ready!");
  
  function initiate(){
    $("#guessTheNumber").empty();
    $("#randomNumber").empty();
  }
  $("#checkMe").click(function () {
    $("#guessTheNumber").empty();
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    var inputNumber = $("#guessTheNumber").val();
    if (inputNumber !== randomNumber) {
      var newDiv = $("#randomNumber").append(`<div class="form-group">
                      <input type="text" class="form-control" id="usr" value=${randomNumber}></div>`);
      newDiv.css({
        height: "50px",
        width: "500px",
        "margin-left": "30%",
        "margin-top": "30px",
        border: "black",
      });
    }else{
        prompt("Correct Guess!");
        initiate();
    }
    $("#restart").click(function(){
       initiate();
    })
  });
});
