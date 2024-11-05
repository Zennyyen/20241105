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
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES) //設定三角函數的角度
  background("#f0f4ef")// 背景顏色
  //================================================
  points = font.textToPoints("王偲芸", -300, 80, 150, {
    sampleFactor:0.2
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小，值越小代表點數越小
  //================================================
  for (let i=0; i<points.length-1; i++) { 
   
 } 
    
}

function draw() {
  background("#f0f4ef")


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
