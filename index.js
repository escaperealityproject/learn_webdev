var squares = document.querySelectorAll(".square");
var colors=["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var pickedColor = colors[3];

document.getElementById("colorDisplay").textContent = pickedColor;

console.log(squares);


for(var i=0;i<colors.length;i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor===pickedColor)
      alert("Yes");
    else
    this.style.backgroundColor = "#232323"
  })
}
console.log(pickedColor)
