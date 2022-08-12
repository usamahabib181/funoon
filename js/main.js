// DOM ELEMENTS
const mute = document.querySelectorAll(".btn-mute");
const unmute = document.querySelectorAll(".btn-unmute");
const videos = document.querySelectorAll(".video__figure");
const menuBtn = document.querySelector(".header-nav__menu");
const sidebar = document.querySelector(".header-sidenav");
const menuList = document.querySelector(".header-nav__sidelist");
const movies = document.querySelectorAll(".movie__item");
const movieContainer = document.querySelectorAll(".movie-popup__movies");
const movieShowMore = document.querySelectorAll(".movie-popup__show");
const headerSticky = document.querySelector(".header--sticky");

// GLOBAL DATA
let prevSlideIndex = 0;
const mainCarousel = ".video-carousel";
const activeSlideClasses = ".video .owl-item.active .video__figure";


const landingDetails = {
    element: ".landing-carousel-en",
    loop: true,
    margin: 10,
    nav: false,
    mouseDrag: true,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        },
    },
};

const landingDetailsRTL = {
    element: ".landing-carousel-ar",
    loop: true,
    margin: 10,
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
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        },
    },
};

const listDetails = {
    element: ".list-carousel-en",
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
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 10,
        },
    },
};

const videoDetails = {
    element: ".video-carousel-en",
    loop: false,
    margin: 0,
    nav: false,
    mouseDrag: false,
    stagePadding: 0,
    dots: true,
    navText: [`&#x27;next&#x27;,&#x27;prev&#x27;`], // default navText
    animateOut: "fadeOut",
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};

const videoDetailsRTL = {
    element: ".video-carousel-ar",
    loop: false,
    margin: 0,
    nav: false,
    mouseDrag: false,
    stagePadding: 0,
    dots: true,
    navText: [`&#x27;next&#x27;,&#x27;prev&#x27;`], // default navText
    animateOut: "fadeOut",
    rtl: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
};

const movieDetails = {
    element: ".movie-carousel-en",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    stagePadding: 50,
    dots: false,
    slideBy: 7,
    onTranslated: handleMovieTranslation,
    onInitialized: handleMovieTranslation,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    responsive: {
        0: {
            items: 3,
            nav: false,
        },
        600: {
            items: 6,
            slideBy: 6,
        },
        1000: {
            items: 7,
            slideBy: 7,
        },
        1920: {
            items: 7,
            slideBy: 7,
        },
        // 1921: {
        // 	items: 9,
        // 	slideBy: 9,
        // },
    },
};

const movieDetailsRTL = {
    element: ".movie-carousel-ar",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    stagePadding: 50,
    dots: false,
    slideBy: 7,
    onTranslated: handleMovieTranslation,
    onInitialized: handleMovieTranslation,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    rtl: true,
    responsive: {
        0: {
            items: 3,
            nav: false,
        },
        600: {
            items: 6,
            slideBy: 6,
        },
        1000: {
            items: 7,
            slideBy: 7,
        },
        1920: {
            items: 7,
            slideBy: 7,
        },
        // 1921: {
        // 	items: 9,
        // 	slideBy: 9,
        // },
    },
};

const exclusiveDetails = {
    element: ".exclusive-carousel-en",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    dots: false,
    slideBy: 6,
    stagePadding: 50,
    onTranslated: handleTranslation,
    onInitialized: handleTranslation,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 50,
        },
        600: {
            items: 5,
            slideBy: 5,
        },
        1000: {
            items: 6,
            slideBy: 6,
        },
        1920: {
            items: 6,
            slideBy: 6,
        },
    },
};

const exclusiveDetailsRTL = {
    element: ".exclusive-carousel-ar",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    dots: false,
    slideBy: 6,
    rtl: true,
    stagePadding: 50,
    onTranslated: handleTranslation,
    onInitialized: handleTranslation,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 50,
        },
        600: {
            items: 5,
            slideBy: 5,
        },
        1000: {
            items: 6,
            slideBy: 6,
        },
        1920: {
            items: 6,
            slideBy: 6,
        },
    },
};

const topDetails = {
    element: ".top-carousel-en",
    loop: true,
    margin: 10,
    nav: true,
    mouseDrag: false,
    stagePadding: 80,
    dots: false,
    slideBy: 6,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 30,
        },
        600: {
            items: 3,
            slideBy: 3,
        },
        1000: {
            items: 4,
            stagePadding: 50,
            slideBy: 4,
        },
        1920: {
            items: 6,
            slideBy: 6,
        },
        2000: {
            items: 8,
            slideBy: 8,
        },
    },
};

const topDetailsRTL = {
    element: ".top-carousel-ar",
    loop: true,
    margin: 10,
    nav: true,
    mouseDrag: false,
    stagePadding: 80,
    dots: false,
    slideBy: 6,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    rtl: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 30,
        },
        600: {
            items: 3,
            slideBy: 3,
        },
        1000: {
            items: 4,
            stagePadding: 50,
            slideBy: 4,
        },
        1920: {
            items: 6,
            slideBy: 6,
        },
        2000: {
            items: 8,
            slideBy: 8,
        },
    },
};

const resumeDetails = {
    element: ".resume-carousel-en",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    stagePadding: 0,
    dots: false,
    slideBy: 7,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 50,
        },
        600: {
            items: 4,
            slideBy: 4,
        },
        1000: {
            items: 4,
            stagePadding: 50,
            slideBy: 4,
        },
        1300: {
            items: 5,
            stagePadding: 50,
            slideBy: 5,
        },
        1920: {
            items: 7,
            slideBy: 7,
        },
        2000: {
            items: 8,
            slideBy: 8,
        },
    },
};

const resumeDetailsRTL = {
    element: ".resume-carousel-ar",
    loop: true,
    margin: 5,
    nav: true,
    mouseDrag: false,
    stagePadding: 0,
    dots: false,
    slideBy: 7,
    navText: [
        "<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>",
        "<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>",
    ],
    rtl: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            stagePadding: 50,
        },
        600: {
            items: 4,
            slideBy: 4,
        },
        1000: {
            items: 4,
            stagePadding: 50,
            slideBy: 4,
        },
        1300: {
            items: 5,
            stagePadding: 50,
            slideBy: 5,
        },
        1920: {
            items: 7,
            slideBy: 7,
        },
        2000: {
            items: 8,
            slideBy: 8,
        },
    },
};

// HIDE ALL MUTE BUTTONS 'onLoad'
unmute.forEach((el) => {
    el.style.display = "none";
});

// MUTE & PAUSE ALL VIDEOS 'onLoad'
videos.forEach((el) => {
    el.muted = true;
    el.pause();
});

// PLAY FIRST VIDEO AFTER 'cover-animation' DELAY 2S 'onLoad'
setTimeout(() => {
    videos[0].muted = true;
    videos[0].play();
}, 2000);

slider({...videoDetails });
slider({...videoDetailsRTL });
slider({...movieDetails });
slider({...movieDetailsRTL });
slider({...exclusiveDetails });
slider({...exclusiveDetailsRTL });
slider({...topDetails });
slider({...topDetailsRTL });
slider({...resumeDetails });
slider({...resumeDetailsRTL });
slider({...landingDetails });
slider({...landingDetailsRTL });
slider({...listDetails });

// CALLS WHEN SLIDE CHANGES
$(mainCarousel).on("changed.owl.carousel", function(event) {
    const currentSlideIndex = event.item.index;

    if (videos[prevSlideIndex].muted === true) {
        resetPrevSlide();
        handleCurrentSlide(currentSlideIndex, true, "", "none");
    } else {
        resetPrevSlide();
        handleCurrentSlide(currentSlideIndex, false, "none", "");
    }

    prevSlideIndex = currentSlideIndex;
});

// PAUSE SLIDE ON SCROLL
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        if (document.querySelector(activeSlideClasses).paused === false) {
            document.querySelector(activeSlideClasses).pause();
        }
    } else {
        document.querySelector(activeSlideClasses).play();
    }
});

// UNMUTE: WHEN USER CLICKS UNMUTE BUTTON
unmute.forEach((element, index) =>
    element.addEventListener("click", (e) => {
        handleMuteAndUnmute("mute", element, index, "", "none", true);
    })
);

// MUTE: WHEN USER CLICKS MUTE BUTTON
mute.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        handleMuteAndUnmute("unmute", element, index, "", "none", false);
    });
});

// SHOW AND HIDE SIDENAV:
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// ADD POPUP ON MOUSE ENTER
movies.forEach((movie) =>
    movie.addEventListener("mouseenter", (e) => {
        addPopup(e);
    })
);

// REMOVE 'POPUP' ON MOUSE LEAVE
movies.forEach((movie) =>
    movie.addEventListener("mouseleave", (e) => {
        removePopupWithDelay(e);
    })
);

// SHOW AND HIDE STICKY NAVBAR
window.addEventListener("scroll", scrollFunction);

// SHOW MORE
movieShowMore.forEach((shwMre) =>
    shwMre.addEventListener("click", (e) => {
        shwMre.classList.toggle("rotate");
        movieContainer.forEach((cont) => cont.classList.toggle("show-less"));
    })
);

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        headerSticky.classList.add("show");
    } else {
        headerSticky.classList.remove("show");
    }
}

function addPopup(e) {
    let moviePost = e.target.closest(".movie__item");
    let isRTL = document.body.classList.contains("rtl");
    let moviePostAttr = moviePost.getAttribute("data-movie");

    // remove popup first
    removePopup(e);

    if (moviePostAttr == "left") {
        addPopupWithDelay(isRTL, moviePost, "item-controls--movie-left", 1000);
    } else if (moviePostAttr == "right") {
        addPopupWithDelay(isRTL, moviePost, "item-controls--movie-right", 1000);
    } else {
        addPopupWithDelay(isRTL, moviePost, "", 1000);
    }
}

function addPopupWithDelay(isRTL, post, classString, time) {
    if (!isRTL) {
        setTimeout(() => {
            post.insertAdjacentHTML(
                "beforeend",
                `<div class="item-controls item-controls--movie ${classString}">
					<figure class="item-controls__figure">
						<img
							class="item-controls__thumbnail"
							src="img/landing-page/resume/poster-1.png"
							alt="icon"
						/>
						<video
							class="item-controls__video"
							src="video/banner-video.mp4"
							loop
							autoplay
							muted
						></video>
					</figure>
					<div class="item-controls__details">
						<h3 class="mb-3 item-controls__title">Bye Bye London</h3>
						<ul class="item-controls__list">
							<li class="item-controls__action">
								<a href="./player.html">
									<img
										class="item-controls__icon"
										src="img/popup/icons/icon-play.svg"
										alt="icon"
									/>
								</a>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-add.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-like.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-dislike.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-adult.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action ms-auto">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-remove-list.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-favorite.svg"
									alt="icon"
								/>
							</li>
							<li
								class="item-controls__action"
								data-bs-toggle="modal"
								data-bs-target="#movieModal"
							>
								<img
									class="item-controls__icon"
									src="img/popup/icons/icon-info.svg"
									alt="icon"
								/>
							</li>
						</ul>
					</div>
				</div>
			`
            );
        }, time);
    } else {
        setTimeout(() => {
            post.insertAdjacentHTML(
                "beforeend",
                `<div class="item-controls item-controls--movie ${classString}">
					<figure class="item-controls__figure">
						<img
							class="item-controls__thumbnail"
							src="../img/landing-page/resume/poster-1.png"
							alt="icon"
						/>
						<video
							class="item-controls__video"
							src="../video/banner-video.mp4"
							loop
							autoplay
							muted
						></video>
					</figure>
					<div class="item-controls__details">
						<h3 class="mb-3 item-controls__title">باي باي لندن</h3>
						<ul class="item-controls__list">
							<li class="item-controls__action">
								<a href="./player.html">
									<img
										class="item-controls__icon"
										src="../img/popup/icons/icon-play.svg"
										alt="icon"
									/>
								</a>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-add.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-like.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-dislike.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-adult.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action ms-auto">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-remove-list.svg"
									alt="icon"
								/>
							</li>
							<li class="item-controls__action">
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-favorite.svg"
									alt="icon"
								/>
							</li>
							<li
								class="item-controls__action"
								data-bs-toggle="modal"
								data-bs-target="#movieModal"
							>
								<img
									class="item-controls__icon"
									src="../img/popup/icons/icon-info.svg"
									alt="icon"
								/>
							</li>
						</ul>
					</div>
				</div>
			`
            );
        }, time);
    }
}

function removePopup(e) {
    let moviePost = e.target.closest(".movie__item");
    let popup = moviePost.lastElementChild;

    if (popup.classList.contains("item-controls--movie")) {
        moviePost.removeChild(popup);
    }
}

function removePopupWithDelay(e) {
    setTimeout(() => {
        removePopup(e);
    }, 1005);
}

function handleMuteAndUnmute(btnType, element, index, btnStyle, elementStyle, isMuted) {
    btnType === "mute" ?
        (mute[index].style.display = btnStyle) :
        (unmute[index].style.display = btnStyle);
    element.style.display = elementStyle;
    videos[index].muted = isMuted;
}

function slider(details) {
    $(details.element).owlCarousel({
        loop: details.loop,
        margin: details.margin,
        nav: details.nav,
        mouseDrag: details.mouseDrag,
        stagePadding: details.stagePadding || 0,
        dots: details.dots,
        navText: details.navText,
        animateOut: details.animateOut || false,
        responsive: details.responsive,
        rtl: details.rtl || false,
        slideBy: details.slideBy || 1,
        autoWidth: details.autoWidth || false,
        onTranslated: details.onTranslated,
        onInitialized: details.onInitialized,
        autoplay: details.autoplay || false,
        autoplayTimeout: details.autoplayTimeout || 5000,
        autoplaySpeed: details.autoplaySpeed || false,
        autoplayHoverPause: details.autoplayHoverPause || false,
        slideTransition: details.slideTransition || "",

    });
}

function resetPrevSlide() {
    videos[prevSlideIndex].pause();
    videos[prevSlideIndex].muted = true;
    mute[prevSlideIndex].style.display = "";
    unmute[prevSlideIndex].style.display = "none";
}

function handleCurrentSlide(curInd, isMuted, muteStye, unmuteStyle) {
    videos[curInd].play();
    videos[curInd].muted = isMuted;
    mute[curInd].style.display = muteStye;
    unmute[curInd].style.display = unmuteStyle;
}

function handleTranslation(event) {
    const dir = document.documentElement.dir;

    if (dir == "rtl") {
        // Reset preview 'popup' first
        resetExclusives();

        // Manage popup for last and secondlast item
        renderExclusivePopup(3, 2);
    } else {
        // Reset preview 'popup' first
        resetExclusives();

        // manage popup for last and secondlast item
        renderExclusivePopup(2, 1);
    }
}

function resetExclusives() {
    const allExclusives = document.querySelectorAll(".exclusive-carousel .owl-item");
    allExclusives.forEach((exclusive) => {
        // Get single exclusive pop-up
        const preview = exclusive.querySelector(".exclusive__preview");

        if (preview.classList.contains("exclusive__preview--right")) {
            preview.classList.remove("exclusive__preview--right");
        }
    });
}

function renderExclusivePopup(secondLastIndex, lastIndex) {
    const activeExclusives = document.querySelectorAll(".exclusive-carousel .owl-item.active");

    // Access last and secondlast item from 6 rendered items
    const secondLastPreview =
        activeExclusives[activeExclusives.length - secondLastIndex].querySelector(
            ".exclusive__preview"
        );
    const lastPreview =
        activeExclusives[activeExclusives.length - lastIndex].querySelector(".exclusive__preview");

    // Add specific classes to last and second-last item
    secondLastPreview.classList.add("exclusive__preview--right");
    lastPreview.classList.add("exclusive__preview--right");
}

function handleMovieTranslation() {
    const dir = document.documentElement.dir;
    const movieActiveItems = document.querySelectorAll(
        ".movie-carousel .owl-item.active .movie__item"
    );

    if (dir == "rtl") {
        // manage leftmost and rightmost item
        movieActiveItems.forEach((item, index) => {
            if (index == 0 || index == 8) {
                item.setAttribute("data-movie", "left");
            } else if (index == 6 || index == 14) {
                item.setAttribute("data-movie", "right");
            }
        });
    } else {
        // manage leftmost and rightmost item
        movieActiveItems.forEach((item, index) => {
            if (index == 0 || index == 7) {
                item.setAttribute("data-movie", "left");
            } else if (index == 6 || index == 13) {
                item.setAttribute("data-movie", "right");
            }
        });
    }
}

// let callback = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		// Each entry describes an intersection change for one observed
// 		// target element:
// 		//   entry.boundingClientRect
// 		//   entry.intersectionRatio
// 		//   entry.intersectionRect
// 		//   entry.isIntersecting
// 		//   entry.rootBounds
// 		//   entry.target
// 		//   entry.time
// 	});
// };

// let options = {
// 	root: document.querySelector("#scrollArea"),
// 	rootMargin: "0px",
// 	threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);