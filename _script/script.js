// Dhruv Kakadiya
// ID - 991653956
// Date - 5/6/22

function image(imgs){
    var expandedImage = document.getElementById("expandedImage");
    var imageText = document.getElementById("imageText");
    var description = document.getElementById("description");

    expandedImage.src = imgs.src;

    imageText.innerHTML = imgs.title;

    description.innerHTML = imgs.alt;

    imgs.style.borderColor="black";
}

function hoverOut(color){
    color.style.borderColor="white";
}
