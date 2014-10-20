var THREEx	= THREEx || {};

THREEx.NyanCatSound	= function() {
	var songPaused = document.createElement("audio");
	var soundUrl = THREEx.NyanCatSound.baseUrl+"sounds/hamster-dance.mp3";
	this.songPaused	= songPaused
	songPaused.setAttribute("src", soundUrl);
	songPaused.setAttribute("loop", "true");

	var songRunning	= document.createElement("audio");
	var soundUrl = THREEx.NyanCatSound.baseUrl+"sounds/hamster-dance.mp3";
	this.songRunning = songRunning;
	songRunning.setAttribute("src", soundUrl);
	songRunning.setAttribute("loop", "true");
	songRunning.play();

	var running	= true;
	this.toggle	= function(){
		running	= (running ? false : true);
		if(running) {
			songRunning.play();
			songPaused.pause();
		}else {
			songRunning.pause();
			songPaused.play();
		}
	}.bind(this);
};

THREEx.NyanCatSound.baseUrl	= "";
