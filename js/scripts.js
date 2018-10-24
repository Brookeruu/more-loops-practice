function vowelsToDashes(array) {
  var newArray = [];
  array.forEach(function(letter){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      newArray.push("-");
    } else {
      newArray.push(letter);
    }
  })
  return newArray;
};






$(document).ready(function() {
  $("#forLoop").submit(function(event) {
    event.preventDefault();

    var inputNumber1 = parseInt($("#inputNum1").val());
    var inputNumber2 = parseInt($("#inputNum2").val());

    for (var index = 0; index <= inputNumber2; index += inputNumber1) {
      alert(index)
    }
  });

  $("form.sentence").submit(function(event) {
    event.preventDefault();

    var sentence1 = ($("#sentenceInput").val()).split("");
    console.log(sentence1);
    var sentenceWithVowelsRemoved = vowelsToDashes(sentence1).join("");
    console.log(sentenceWithVowelsRemoved);

    $("#sentenceOutput").text(sentenceWithVowelsRemoved);


  });
});
