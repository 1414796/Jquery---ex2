
var total = $(".mySlide img").length;
var slide = $(".mySlide img");
var slideIndex = 0;
var key = 0;
var num = false;

// auto slide after 5s
// window.setInterval(function() {
//     $('.next').click();
// }, 5000);

// event when click button left
function moveLeft(n) {
    slideIndex += n;
    key = n;
    showSlide(slideIndex);
    TweenMax.fromTo($(".mySlide img").eq(slideIndex-1), 0.3, {x:-650, y:0}, {x:  0, y: 0});

}

// event when click button right
function moveRight(n) {
    slideIndex += n;
    key = n;
    showSlide(slideIndex);
    // $(".mySlide img").eq(slideIndex-2).style.display = "block";
    TweenMax.fromTo($(".mySlide img").eq(slideIndex-1), 0.3, {x:  650, y: 0}, {x:0, y:0});

}

//when click on item
function moveItem(n) {
    slideIndex =n;

    showSlide(slideIndex);
    if (key<n & key != 0) {
        TweenMax.fromTo($(".mySlide img").eq(slideIndex-1), 0.3, {x:  650, y: 0}, {x: 0, y: 0});
    }
    else if (key>n| key == 0) {
        TweenMax.fromTo($(".mySlide img").eq(slideIndex-1), 0.3, {x: -650, y: 0}, {x: 0, y: 0});
    }
    else {
        return;
    }
    key = n;

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
        // if (i != slideIndex) {
            slide[i].style.display = "none";
        // }

    }
    for (var j = 1; j < total; j++) {
        $(".item")[j].className = $(".item")[j].className.replace("active", "");
        // $(".item")[j].removeClass("active");
    }

    $(".mySlide img")[slideIndex-1].style.display = "block";

    num = true;

    $(".item")[slideIndex-1].off("click", ".active").className += " active";

}

