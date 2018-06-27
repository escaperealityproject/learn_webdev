var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

document.getElementById("colorDisplay").textContent = pickedColor;

resetButton.addEventListener("click",function(){
  resetButton.textContent= "New Colors";
  colors = generateRandomColors(6);
  giveRandColors();
  pickedColor = pickColor();
  document.getElementById("colorDisplay").textContent = pickedColor;
})

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      resetButton.textContent= "Play Again!";
    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Wrong";
    }
  })
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[giveRandNumUpto(colors.length)];
}

function generateRandomColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors[i] = "rgb(" + giveRandNumUpto(256) + ", " + giveRandNumUpto(256) + ", " + giveRandNumUpto(256) + ")";
  }
  return colors;
}

function giveRandNumUpto(num) {
  return Math.floor(Math.random() * num);
}

function giveRandColors() {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}
