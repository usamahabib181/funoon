//https://codepen.io/tutsplus/pen/bPrRVb
$(function() {
    var card = $(".cards");
    card.on("mousemove", function(e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();

        var rY = map(x, 0, $(this).width(), -17, 20);
        var rX = map(y, 0, $(this).height(), -17, 20);

        var mX = rX * 4;
        var mY = rY * 4;

        $(this)
            .children(".image")
            .css(
                "transform",
                "rotateY(" +
                rY +
                "deg)" +
                " " +
                "rotateX(" +
                -rX +
                "deg)" +
                " " +
                "translate(" +
                mY +
                "px" +
                ", " +
                -mX +
                "px)"
            );
        $(this)
            .children(".image2")
            .css(
                "transform",
                "rotateY(" +
                rY / 2 +
                "deg)" +
                " " +
                "rotateX(" +
                -rX / 2 +
                "deg)" +
                " " +
                "translate(" +
                mY / 2 +
                "px" +
                ", " +
                -mX / 2 +
                "px)"
            );
        $(this)
            .children(".image3")
            .css(
                "transform",
                "rotateY(" +
                rY / 4 +
                "deg)" +
                " " +
                "rotateX(" +
                -rX / 4 +
                "deg)" +
                " " +
                "translate(" +
                mY / 4 +
                "px" +
                ", " +
                -mX / 4 +
                "px)"
            );
        $(this)
            .children(".image4")
            .css(
                "transform",
                "rotateY(" +
                rY / 6 +
                "deg)" +
                " " +
                "rotateX(" +
                -rX / 6 +
                "deg)" +
                " " +
                "translate(" +
                mY / 6 +
                "px" +
                ", " +
                -mX / 6 +
                "px)"
            );
        $(this)
            .children(".image5")
            .css(
                "transform",
                "rotateY(" +
                rY / 10 +
                "deg)" +
                " " +
                "rotateX(" +
                -rX / 10 +
                "deg)" +
                " " +
                "translate(" +
                mY / 10 +
                "px" +
                ", " +
                -mX / 10 +
                "px)"
            );
    });

    function map(x, in_min, in_max, out_min, out_max) {
        return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
});









const starsFigure = document.querySelector(".stars");
const starsVideoBox = document.querySelector(".stars__videobox");
const starsVideo = document.querySelector(".stars__video");
const starsBtn = document.querySelector(".stars__btn");

starsBtn.addEventListener("click", (e) => {
    const imgIcon = starsBtn.querySelector("img");
    if (starsVideo.muted) {
        starsVideo.muted = false;
        imgIcon.src = imgIcon.src.replace("icon-mute.svg", "icon-unmute.svg");
    } else {
        starsVideo.muted = true;
        imgIcon.src = imgIcon.src.replace("icon-unmute.svg", "icon-mute.svg ");
    }
});

let observerConfig = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
};

function observerFn(entries, observer) {
    let entry = entries[0]; // we have only one entry

    if (entry.isIntersecting) {
        starsVideo.play();
        starsFigure.classList.add("stars__figure-fadeOut");
        starsVideoBox.classList.add("stars__video-fadeIn");
    } else {
        starsVideo.pause();
    }
}

const observer = new IntersectionObserver(observerFn, observerConfig);
observer.observe(starsFigure);

// 
$('.list-carousel-en').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    mouseDrag: true,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 10
        }
    }
})