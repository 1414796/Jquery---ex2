
var total = $(".mySlide img").length;
var slide = $(".mySlide img");
var slideIndex = 0;
var num = false;

function moveLeft(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function moveRight(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function moveItem(n) {
    slideIndex = n;
    showSlide(slideIndex);

}

function showSlide(n) {

    if (n >  total) {
        slideIndex = 1;
    }
    if (n < 1) {
        if (num == true) {
            slideIndex = total;
        }
        else {
            slideIndex = 4;
        }
    }
    for (var i = 0; i < total; i++) {
        slide[i].style.display = "none";
    }
    for (var j = 0; j < total; j++) {
        $(".item")[j].className = $(".item")[j].className.replace("active", "");
    }
    $(".mySlide img")[slideIndex-1].style.display = "block";
    // setInterval(function () {
    //    $(".mySlide").animate({
    //        marginLeft: '+=600px'
    //    }, 2000)
    // });
    // TweenMax.fromTo(".mySlide", 2, 0, 300);
    num = true;

    $(".item")[slideIndex-1].className += " active";

}

$(document).ready(function () {



});