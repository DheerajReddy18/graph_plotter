var canvas=document.getElementById("canvas");  
canvas.width=1000;
canvas.height=600;
var xgrid=10;
var ygrid=10;
var cellsize=10;
var exp=document.getElementById("func").value;
var ctx=canvas.getContext('2d');
function drawgrids()
{
  ctx.beginPath();
  while(xgrid<canvas.height)
  {
      ctx.moveTo(0,xgrid);
      ctx.lineTo(canvas.width,xgrid);
      xgrid+=cellsize;
  }
  while(ygrid<canvas.width)
  {
      ctx.moveTo(ygrid,0);
      ctx.lineTo(ygrid,canvas.height);
      ygrid+=cellsize;
  }
   ctx.strokeStyle="grey";
   ctx.stroke();
}
function blocks(count){
 return count*cellsize;
}

function drawaxis(){
  ctx.strokeStyle=" solid black";
  ctx.moveTo(blocks(50),blocks(0));
  ctx.lineTo(blocks(50),blocks(60));
  ctx.moveTo(blocks(0),blocks(30));
  ctx.lineTo(blocks(100),blocks(30));
  ctx.stroke();


}
drawaxis();
drawgrids();

function myfunction(){
    var exp=document.getElementById("func").value;
    console.log(exp);
    ctx.translate(blocks(50),blocks(30));
    ctx.moveTo(blocks(0),blocks(0));
    
    for (var x=0;x<100;x++)
    {
    var y=eval(exp);
    console.log(eval(exp));
    ctx.strokeStyle="red";
    ctx.lineTo(blocks(x),blocks(-y));
    ctx.stroke();
    
    

    
    }
}
