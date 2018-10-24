$(document).ready(function() {
  $("#forLoop").submit(function(event) {
    event.preventDefault();

    var inputNumber1 = parseInt($("#inputNum1").val());
    var inputNumber2 = parseInt($("#inputNum2").val());
console.log(inputNumber1);
    for (var index = 0; index <= inputNumber2; index += inputNumber1) {
      alert(index)
    }

  });
});
