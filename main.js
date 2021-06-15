var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

rover_width = 90;
rover_height = 90;
rover_x = 250;
rover_y = 250;
rover_img = "rover.png";
background_img = "mars.jpg";

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadbackground;
background_imgTag.src = background_img;

rover_add = new Image();
rover_add.onload = uploadRover;
rover_add.src = rover_img;
}

function uploadbackground(){

ctx.drawImage(background_imgTag,0,0,900,450);

}

function uploadRover(){
ctx.drawImage(rover_add,rover_x,rover_y,rover_width,rover_height);


}
