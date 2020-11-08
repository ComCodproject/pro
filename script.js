var i = 0;
var images = [];
var time = 3000;

images[0] = "img/1.png";
images[1] = "img/2.png";
images[2] = "img/3.png";
images[3] = "img/4.png";

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg;

// Side menu START
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Side menu END