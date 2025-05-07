canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;
function next(){   
        img_imgTag = new Image(); 
        img_imgTag.onload = uploadimg; 
        img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}