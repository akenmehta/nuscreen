var app = {};
app.windowSize = $(window).width();

app.removeClass = function() {
	if(app.windowSize <= 1007) {
		$('.last-child').removeClass('invisible');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.removeClass();
	});
};

app.init = function() {
	app.windowResize();
	app.removeClass();
};

$(function() {
	app.init();
});
