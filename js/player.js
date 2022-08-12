const videoContainer = document.querySelector(".video-container");
const video = document.querySelector(".video-container video");
const controlsContainer = document.querySelector(".video-container .controls-container");
const backContainer = document.querySelector(".video-container .back-container");
const pauseContainer = document.querySelector(".video-container .pause-overlay-container");
const playPauseButton = document.querySelector(".video-container .controls button.play-pause");
const rewindButton = document.querySelector(".video-container .controls button.rewind");
const fastForwardButton = document.querySelector(".video-container .controls button.fast-forward");
const forwardIcon = document.querySelector(
	".video-container .forward-backward-container .forward-10"
);
const backwardIcon = document.querySelector(
	".video-container .forward-backward-container .backward-10"
);
const pauseCenterIcon = document.querySelector(
	".video-container .pause-center-container .pause-center-icon"
);
const volumeButton = document.querySelector(".video-container .controls button.volume");
const fullScreenButton = document.querySelector(".video-container .controls button.full-screen");
const playButton = playPauseButton.querySelector(".playing");
const pauseButton = playPauseButton.querySelector(".paused");
const fullVolumeButton = volumeButton.querySelector(".full-volume");
const mutedButton = volumeButton.querySelector(".muted");
const maximizeButton = fullScreenButton.querySelector(".maximize");
const minimizeButton = fullScreenButton.querySelector(".minimize");
const speedButton = document.querySelectorAll(".speed-circle");
const volumeSlider = document.getElementById("volume-slider");
const audioPlayerContainer = document.getElementById("audio-player-container");
const progressBar = document.querySelector(
	".video-container .progress-controls .player-progress-bar"
);
const watchedBar = document.querySelector(
	".video-container .progress-controls .player-progress-bar .watched-bar"
);
const timeLeft = document.querySelector(".video-container .progress-controls .time-remaining");
const videoThumbnailContainer = document.querySelector(".video-container .video-preview");
const videoThumbnail = document.querySelector(".video-container .video-thumbnail");
const timeThumbnail = document.querySelector(".video-container .time-preview");

speedButton.forEach((button) =>
	button.addEventListener("click", (e) => {
		speedButton.forEach((btn) => btn.classList.remove("selected"));
		const clickedElement = e.target;
		const classes = e.target.classList;
		clickedElement.classList.add("selected");

		if (classes.contains("speed-0.5")) {
			video.playbackRate = 0.5;
		}
		if (classes.contains("speed-0.7")) {
			video.playbackRate = 0.7;
		}
		if (classes.contains("speed-1.0")) {
			video.playbackRate = 1.0;
		}
		if (classes.contains("speed-1.2")) {
			video.playbackRate = 1.2;
		}
		if (classes.contains("speed-1.5")) {
			video.playbackRate = 1.5;
		}
	})
);

let controlsTimeout;
let iconsTimeout;
controlsContainer.style.opacity = "0";
backContainer.style.opacity = "0";
pauseContainer.style.opacity = "0";
forwardIcon.style.opacity = "0";
backwardIcon.style.opacity = "0";
pauseCenterIcon.style.opacity = "0";
watchedBar.style.width = "0px";
pauseButton.style.display = "none";
minimizeButton.style.display = "none";

const displayControls = () => {
	controlsContainer.style.opacity = "1";
	backContainer.style.opacity = "1";
	pauseContainer.style.opacity = "0";

	document.body.style.cursor = "initial";
	if (controlsTimeout) {
		clearTimeout(controlsTimeout);
	}
	controlsTimeout = setTimeout(() => {
		controlsContainer.style.opacity = "0";
		backContainer.style.opacity = "0";
		if (video.paused) {
			pauseContainer.style.opacity = "1";
		}
		document.body.style.cursor = "none";
	}, 5000);
};

const showHideIcon = (elementNode) => {
	elementNode.style.opacity = "1";

	if (iconsTimeout) {
		clearTimeout(iconsTimeout);
	}

	iconsTimeout = setTimeout(() => {
		elementNode.style.opacity = "0";
	}, 500);
};

const playPause = () => {
	if (video.paused) {
		video.play();
		playButton.style.display = "none";
		pauseButton.style.display = "";
	} else {
		showHideIcon(pauseCenterIcon);
		video.pause();
		playButton.style.display = "";
		pauseButton.style.display = "none";
	}
};

const toggleMute = () => {
	video.muted = !video.muted;
	if (video.muted) {
		fullVolumeButton.style.display = "none";
		mutedButton.style.display = "";
		volumeSlider.value = "0";
		audioPlayerContainer.style.setProperty("--volume-before-width", 0 + "%");
	} else {
		fullVolumeButton.style.display = "";
		mutedButton.style.display = "none";
		volumeSlider.value = "50";
		video.volume = 0.5;
		audioPlayerContainer.style.setProperty("--volume-before-width", 50 + "%");
	}
};

const toggleFullScreen = () => {
	if (!document.fullscreenElement) {
		videoContainer.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
};

const convertHMS = (value) => {
	const sec = parseInt(value, 10); // convert value to number if it's string
	let hours = Math.floor(sec / 3600); // get hours
	let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
	let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
	// add 0 if value < 10; Example: 2 => 02
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
};

document.addEventListener("fullscreenchange", () => {
	if (!document.fullscreenElement) {
		maximizeButton.style.display = "";
		minimizeButton.style.display = "none";
	} else {
		maximizeButton.style.display = "none";
		minimizeButton.style.display = "";
	}
});

document.addEventListener("keyup", (event) => {
	if (event.code === "Space") {
		playPause();
	}

	if (event.code === "KeyM") {
		toggleMute();
	}

	if (event.code === "KeyF") {
		toggleFullScreen();
	}

	if (event.code === "ArrowLeft") {
		video.currentTime -= 10;
		showHideIcon(backwardIcon);
	}

	if (event.code === "ArrowRight") {
		video.currentTime += 10;
		showHideIcon(forwardIcon);
	}

	displayControls();
});

document.addEventListener("mousemove", () => {
	displayControls();
});

video.addEventListener("timeupdate", () => {
	watchedBar.style.width = (video.currentTime / video.duration) * 100 + "%";

	// TODO: calculate hours as well...
	const totalSecondsRemaining = video.duration - video.currentTime;
	// THANK YOU: BEGANOVICH
	const time = new Date(null);
	time.setSeconds(totalSecondsRemaining);
	let hours = null;

	if (totalSecondsRemaining >= 3600) {
		hours = time.getHours().toString().padStart("2", "0");
	}

	let minutes = time.getMinutes().toString().padStart("2", "0");
	let seconds = time.getSeconds().toString().padStart("2", "0");

	timeLeft.textContent = `${hours ? hours : "00"}:${minutes}:${seconds}`;
});

// PLAY/PAUSE
playPauseButton.addEventListener("click", playPause);

// FORWARD/REWIND by CLICK
progressBar.addEventListener("click", (event) => {
	const pos =
		(event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) /
		progressBar.offsetWidth;
	video.currentTime = pos * video.duration;
});

// VIDEO THUMBNAIL PREVIEW
progressBar.addEventListener("mousemove", (event) => {
	const pos =
		(event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) /
		progressBar.offsetWidth;
	videoThumbnail.currentTime = pos * videoThumbnail.duration;

	if (pos > 0.077 && pos < 0.88) {
		videoThumbnailContainer.style.transform = "translateX(-50%)";
		videoThumbnailContainer.style.left =
			(videoThumbnail.currentTime / videoThumbnail.duration) * 100 + "%";
	} else if (pos > 0.88) {
		videoThumbnailContainer.style.transform = "translateX(0)";
		videoThumbnailContainer.style.right = 0;
		videoThumbnailContainer.style.left = "unset";
	} else {
		videoThumbnailContainer.style.left = 0;
		videoThumbnailContainer.style.transform = "translateX(0)";
	}

	let time = convertHMS(videoThumbnail.currentTime);
	timeThumbnail.textContent = time;
});

// FORWARD by 10ms
fastForwardButton.addEventListener("click", () => {
	video.currentTime += 10;
	showHideIcon(forwardIcon);
});

// REWIND by 10ms
rewindButton.addEventListener("click", () => {
	video.currentTime -= 10;
	showHideIcon(backwardIcon);
});

// FULLSCREEN TOGGLE
fullScreenButton.addEventListener("click", toggleFullScreen);

// VOLUME CONTROL
volumeSlider.addEventListener("input", (e) => {
	const target = e.target;
	const targetValue = e.target.value;

	audioPlayerContainer.style.setProperty(
		"--volume-before-width",
		(targetValue / target.max) * 100 + "%"
	);

	const volumeValue = targetValue / 100;

	if (volumeValue === 0) {
		fullVolumeButton.style.display = "none";
		mutedButton.style.display = "";
	} else {
		fullVolumeButton.style.display = "";
		mutedButton.style.display = "none";
	}

	video.volume = volumeValue;
});

// MUTE/UNMUTE
volumeButton.addEventListener("click", toggleMute);

// PLAY/PAUSE on RANDOM CLICK
videoContainer.addEventListener("click", function (e) {
	const targetNode = e.target;

	if (pauseContainer.style.opacity == "1") {
		pauseContainer.style.opacity = "0";
		displayControls();
		return;
	}

	if (
		targetNode.closest(".controls") ||
		targetNode.closest(".back-button") ||
		targetNode.closest(".progress-controls")
	)
		return;

	playPause();
});
