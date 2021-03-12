<!DOCTYPE html>
<html>


<body>
<h1>Lab: 01 Fruit Chart</h1>
<canvas id="myCanvas" width="700" height="600"/>

<script>

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Create an array of fruit and their value

  var fruit = [  
    {name:"Apple", quantity:20, color:"red"},
    {name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"}


    ];

// Function Rectangles will take as parameter the x-axis, the y-axis the height of the rectangle and the color

function Rectangles(x,y,width,height,color){
  ctx.fillStyle=color;
  ctx.fillRect(x,y,width,height);

}

function textFormat(font,color,text,x,y){
  ctx.textFormat = font;
  ctx.fillStyle= color;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}

for(var i=0; i<fruit.length;i++){
  Rectangles(i*110,0, 110, fruit[i].quantity*30,fruit[i].color);
  textFormat('22px Calibri','black', fruit[i].name, (i*110)+40,30);
  textFormat('22px Calibri','black', fruit[i].quantity, (i*110)+40,50);
}
</script>


</body>

</html>
