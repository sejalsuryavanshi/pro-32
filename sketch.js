const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg="sunrise1.png";
var Time;
var hour
function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

// add condition to check if any background image is there to add
  if(backgroundImg){
        background(backgroundImg);
   }
       
   Engine.update(engine);

   textSize(35)
        fill("black");
     
   


    
    
    
    
    //write code to display time in correct format here


        fill(0,0,0)
        textSize(26)
        text("Time : " + Time ,100,50)


}

async function getBackgroundImg(){

    

        // write code to fetch time from API
         var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
       
         //change the data in JSON format
         var responseJSON = await response.json();
         console.log("Time",responseJSON)
         // write code slice the datetime
         var datetime = responseJSON.datetime;
         var hour = datetime.slice(11,13);
         console.log(hour);
   
        if(hour>=04&&hour<=06){
            bg="sunrise1.png"
            Time=hour
        }else if(hour>=06&&hour<=08){
            bg="sunrise2.png"
            Time=hour
        }else if(hour>=08&&hour<=10){
            bg="sunrise3.png"
            Time=hour
        }else if(hour>=10&&hour<=11){
            bg="sunrise4.png"
            Time=hour
        }else if(hour>=12&&hour<=14){
            bg="sunrise5.png"
            Time=hour
        }else if(hour>=14&&hour<=16){
            bg="sunrise6.png"
            Time=hour
        }else if(hour>=16&&hour<=18){
            bg="sunset7.png"
            Time=hour
        }else if(hour>=18&&hour<=20){
            bg="sunset8.png"
            Time=hour
        }else if(hour>=20&&hour<=22){
           bg="sunset9.png"
           Time=hour
        }else if(hour>=23&&hour<=0){
            bg="sunset10.png"
            Time=hour
            //00=12:00 at night;
        }else if(hour==00&&hour<=03){
            bg="sunset11.png"
        }else {
            bg="sunset12.png"
            Time=hour
        }
        backgroundImg = loadImage(bg);

}
