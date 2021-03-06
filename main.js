var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });

}

        function plus() {
    
        console.log("increase size");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    

   function minus() {
        console.log("decrease sie");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
   }

function up() {

    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block image height= " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {

    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("Block image height= " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {

    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("Block image width= " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {

    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("Block image width= " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
} 

function cloud() {
        new_image('cloud.jpg');
        console.log("c");
}

function darkgreen() {

        new_image('dark_green.png');
        console.log("d");
}

function ground() {

        new_image('ground.png');
        console.log("g");
}

function lightgreen() {
  
        new_image('light_green.png');
        console.log("l");
}

function roof() {

        new_image('roof.jpg');
        console.log("r");
}

function trunk() {
 
        new_image('trunk.jpg');
        console.log("t");
}

function unique() {
   
        new_image('unique.png');
        console.log("u");
}

function wall() {
    
        new_image('wall.jpg');
        console.log("w");
}

function yellowwall() {

        new_image('yellow_wall.png');
        console.log("y");
    
}