var app = {};
app.windowSize = $(window).width();

// app.hover = function() {
// 	$('.image-grid-child').hover(function() {
// 		console.log(this);
// 		$('div.image__flex-container').addClass('teal-overlay');
// 	});
// }

app.removeClassInvisible = function() {
	if(app.windowSize <= 1007) {
		$('.last-child').removeClass('invisible');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.removeClassInvisible();
	});
};

app.init = function() {
	app.windowResize();
	app.removeClassInvisible();
	// app.hover();
};

$(function() {
	app.init();
});
