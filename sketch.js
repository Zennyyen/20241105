let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 20
// ==================================================.
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("font/NotoSansTC-VariableFont_wght.ttf") 
}
//==================================================
function setup() { //                               
  createCanvas(windowWidth,windowHeight); //產生一個畫布 
  angleMode(DEGREES) //設定三角函數的角度
  background("#fbf8cc")//設定背景顏色
  //===============================================
  points = font.textToPoints("TKUUUUUUU", -300, 80, 150, {
    sampleFactor:0.2
  });  for (let i=0; i<points.length-1; i++) { 
  }
  
}

function draw() {   //畫圖，每秒會畫60次
 background("#fbf8cc")
 rectMode(CENTER)
 noFill() //以下所畫的物件不要顏色
 stroke("#1b263b") //框線的顏色
 strokeWeight(3) // 框線的粗細
 var rect_width=50 +mouseX/10
 var bc_width=50 +mouseY/10
 var sc_width=25 +mouseX/100
for(let j=0;j<20;j=j+1){
 for(let i=0;i<40;i=i+1){
  if(j<5){
    stroke("#fde4cf")
  }else if(j<10) {
    stroke("#ffcfd2")
  }else if(j<15) {
    stroke("#f1c0e8")
  }else if(j<20) {
    stroke("#cfbaf0")
  }
  
 ellipse(25+50*i,25+50*j,bc_width) //在座標(x；25,y；25)，畫一個圓
 rect(25+50*i,25+50*j,rect_width) //畫方形，在座標(x；25,y；25)，畫一個直徑50的方形
 ellipse(50+50*i,50+50*j,sc_width) //畫一個小圓
  }
  
}
translate(width/2,height/2) //把原本原點(0,0)在左上角，改到畫布中心點
  rotate(frameCount%360)
  for (let i=0; i<points.length-1; i++) { 
   
    fill("#344966")//畫圓的充滿顏色
    stroke("#b4cded")
    strokeWeight(2)
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x,points[i+1].y) //畫線，兩個點構成一條線
 } 
 angle =angle+10
}






