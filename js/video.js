var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// Play the video and update the volume information.
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause Button: Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed Up：Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Skip Ahead：Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location " + video.currentTime);
});

// Mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// Volume Slider: Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Slider");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Styled: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

// Original: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});




