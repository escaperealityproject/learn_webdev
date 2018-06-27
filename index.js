var squares = document.querySelectorAll(".square");
var colors;
var pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

genPickColors(numSquares);

easyBtn.addEventListener("click", function() {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares=3;
  genPickColors(numSquares);
  for (var i = numSquares; i < squares.length; i++) {
    squares[i].style.display = "none";
  }
})

hardBtn.addEventListener("click", function() {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares=6;
  genPickColors(numSquares);
  for (var i = 3; i < squares.length; i++) {
    squares[i].style.display = "block";
  }
})

document.getElementById("colorDisplay").textContent = pickedColor;

resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colors";
  genPickColors(numSquares);
})

for (var i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      resetButton.textContent = "Play Again!";
      document.getElementById("colorDisplay").style.backgroundColor = pickedColor;
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
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  return colors;
}

function giveRandNumUpto(num) {
  return Math.floor(Math.random() * num);
}


function genPickColors(num) {
  colors = generateRandomColors(num);
  pickedColor = pickColor();
  document.getElementById("colorDisplay").textContent = pickedColor;
  document.getElementById("colorDisplay").style.backgroundColor = "#232323";
}
