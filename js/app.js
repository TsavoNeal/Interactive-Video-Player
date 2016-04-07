/* VARIABLES 
------------------------------------------------------- */

// Video
var $video = $("#video");

// Video Controls
var $progressBar = $("#progressBar");
var $progress = $("#progress");
var $playButton = $("#play");
var $muteButton = $("#mute");
var $fullScreenBtn = $("#fullScreen");
var $duration = $("#duration");
   
/* VIDEO PLAYER 
------------------------------------------------------- */

// Toggles play/pause for the video
function playVideo() {      
	if($video[0].paused) {
    	$video[0].play();
    	$playButton.find("img").attr("src", "icons/pause-icon.png"); 
	} else {
		$video[0].pause();
    	$playButton.find("img").attr("src", "icons/play-icon.png");  			
	}		
}

// Mutes the video
function muteVideo() {
	if ($video[0].muted === false) {
		$video[0].muted = true;
		$muteButton.find("img").attr("src", "icons/volume-off-icon.png");
	} else {
		$video[0].muted = false;
		$muteButton.find("img").attr("src", "icons/volume-on-icon.png");				
	}	
}

// Play/pause on video click
$video.click(function() {
	playVideo();
});

// Play/pause on spacebar 
$("body").on("keydown", function(e) {
	if(e.keyCode === 32 ) {	
	    e.preventDefault();		
		playVideo();     
	}
});

// Mute/sound on m key
$("body").on("keydown", function(e) {
	if(e.keyCode === 77 ) {
	    e.preventDefault();		
		muteVideo();
	}
});

// Video duration timer
$video.on("timeupdate", function() {
	var $videoTime = $video[0].currentTime;
	if ($videoTime < 9.5) {
		$duration.html("00:0" + Math.round($videoTime) + " / 01:00");		
	} else {
		$duration.html("00:" + Math.round($videoTime) + " / 01:00");			
	}
});

/* VIDEO CONTROLS
------------------------------------------------------- */

// Progress bar
$progressBar[0].addEventListener("change", function() {
	var time = $video[0].duration * ($progressBar[0].value / 100);
	$video[0].currentTime = time;
});

// Update progress bar as video plays
$video[0].addEventListener("timeupdate", function() { 
	var value = (100 / $video[0].duration) * $video[0].currentTime;
	$progress.css("width", value+"%");	
}); 

// Play/pause on button click
$playButton.click(function() {
	playVideo();
});

// Mute video on button click
$muteButton.click(function() {
	muteVideo();
});

// Fullscreen on button click
$fullScreenBtn.click(function() {
	if ($video[0].webkitRequestFullscreen()) {
		$video[0].webkitRequestFullscreen();
	} else if ($video[0].msRequestFullscreen()) {
		$video[0].msRequestFullscreen();
	} else if ($video[0].mozRequestFullscreen()) {
		$video[0].mozRequestFullscreen();
	} else if ($video[0].requestFullscreen()) {
		$video[0].requestFullscreen();
	}
	
});

/* VIDEO TRANSCRIPT 
------------------------------------------------------- */

// Highlight current span when video plays 
	$video.on("timeupdate", function() {
		var $videoTime = $video[0].currentTime;
		function addHighlight(n) {
			$('span[data-pos]').removeClass("highlight");
			$('span[data-pos="' + n + '"]').addClass("highlight");
		}

			if ($videoTime > 0.240 && $videoTime < 4.130) {
				addHighlight(1);
			} else if ($videoTime > 4.13 && $videoTime < 7.535) {
				addHighlight(2);
			} else if ($videoTime > 7.535 && $videoTime < 11.27) {
				addHighlight(3);
			} else if ($videoTime > 11.27 && $videoTime < 13.96) {
				addHighlight(4);
			} else if ($videoTime > 13.96 && $videoTime < 17.94) {
				addHighlight(5);
			} else if ($videoTime > 17.94 && $videoTime < 22.37) {
				addHighlight(6);
			} else if ($videoTime > 22.37 && $videoTime < 26.88) {
				addHighlight(7);
			} else if ($videoTime > 26.88 && $videoTime < 30.92) {
				addHighlight(8);
			} else if ($videoTime > 32.1 && $videoTime < 34.73) {
				addHighlight(9);
			} else if ($videoTime > 34.73 && $videoTime < 39.43) {
				addHighlight(10);
			} else if ($videoTime > 39.43 && $videoTime < 41.19) {
				addHighlight(11);
			} else if ($videoTime > 42.35 && $videoTime < 46.3) {
				addHighlight(12);
			} else if ($videoTime > 46.3 && $videoTime < 49.27) {
				addHighlight(13);
			} else if ($videoTime > 49.27 && $videoTime < 53.76) {
				addHighlight(14);
			} else if ($videoTime > 53.76 && $videoTime < 57.78 ) {
				addHighlight(15);
			} else if ($videoTime > 57.78) {
				addHighlight(16);
			}

	});


