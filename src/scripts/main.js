var app = {};
app.windowSize = $(window).width();

app.removeClassInvisible = function() {
	if(app.windowSize <= 1007 && app.windowSize >= 623) {
		$('.last-child').removeClass('invisible');
	}

	else if(app.windowSize <= 623) {
		$('.last-child').addClass('invisible');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.removeClassInvisible();
  		console.log(app.windowSize);
	});
};

app.init = function() {
	app.windowResize();
	app.removeClassInvisible();
	
};

$(function() {
	app.init();
});
