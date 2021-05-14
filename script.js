var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) 
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  

  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()

  ctx.beginPath()
      ctx.moveTo(100,125)
      ctx.lineTo(300,125)
      ctx.lineTo(300,350)
      ctx.lineTo(100,350)
    ctx.closePath()
    ctx.fillStyle="#577C8A"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  ctx.fillStyle = "#336774"
  ctx.fillRect(100,100,200,25)
  ctx.strokeRect(100,100,200,25)
  
  ctx.fillStyle = "#77969A"
  ctx.fillRect(225,95,50,255) 
  ctx.strokeRect(225,95,50,255)
  
  ctx.fillStyle = "white"
  ctx.fillRect(125,150,25,25) 
  ctx.strokeRect(125,150,25,25)
  ctx.fillRect(175,150,25,25) 
  ctx.strokeRect(175,150,25,25)
  ctx.fillRect(125,200,25,25) 
  ctx.strokeRect(125,200,25,25)
  ctx.fillRect(175,200,25,25) 
  ctx.strokeRect(175,200,25,25)
  ctx.fillRect(125,250,25,25) 
  ctx.strokeRect(125,250,25,25)
  ctx.fillRect(175,250,25,25) 
  ctx.strokeRect(175,250,25,25)
  
 ctx.fillStyle = "#A5DEE4"
  ctx.fillRect(170,300,30,50) 
  ctx.strokeRect(170,300,30,50)
  ctx.fillRect(200,300,30,50) 
  ctx.strokeRect(200,300,30,50)
  
   ctx.beginPath()
        ctx.moveTo(250,95)
        ctx.lineTo(250,50-mouse.y/5)
        ctx.lineTo(275,65 - (time%3)-mouse.y/5)
        ctx.lineTo(250,75-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //車子
    ctx.fillStyle="white"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})