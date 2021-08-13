

var a = prompt('Enter the first variable: ');
var b=prompt("Enter the 2nd variable");


function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(Swap)
  }


function draw()
{
}
function Swap(){
  [a,b]=[b,a]
  console.log("value of a after swawpping"+a)
  console.log("value of b after swapping"+b)
}