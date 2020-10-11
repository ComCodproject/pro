var i = 0;
var images = [];
var time = 3000;

images[0] = "img/slide1.png";
images[1] = "img/slide2.png";
images[2] = "img/res.jpg";

function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg;