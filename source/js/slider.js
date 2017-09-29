'use strict';

var slides = document.querySelectorAll('.slides__slide'),
	currentSlide = 0,
	slideInterval = setInterval(nextSlide,4000),
	playing = true,
	pauseButton = document.getElementById('pause'),
	next = document.getElementById('next'),
	previous = document.getElementById('previous');

function nextSlide() {
 goToSlide(currentSlide+1);
}

function previousSlide() {
 goToSlide(currentSlide-1);
}

function goToSlide(n) {
 slides[currentSlide].className = 'slides__slide';
 currentSlide = (n+slides.length)%slides.length;
 slides[currentSlide].className = 'slides__slide showing';
}

function pauseSlideshow() {
 pauseButton.innerHTML = 'Play';
 playing = false;
 clearInterval(slideInterval);
}

function playSlideshow() {
 pauseButton.innerHTML = 'Pause';
 playing = true;
 slideInterval = setInterval(nextSlide,4000);
}

pauseButton.onclick = function() {
 if(playing) {
 pauseSlideshow();
  } else {
 playSlideshow();
  }
};

next.onclick = function() {
 pauseSlideshow();
 nextSlide();
};
previous.onclick = function() {
 pauseSlideshow();
 previousSlide();
};