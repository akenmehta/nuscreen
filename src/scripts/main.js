var app = {};
app.windowSize = $(window).width();

app.toogleMenu = function() {
	$('.nav-btn').on('click', function() {
		$('.menu-items').toggleClass('invisible');
	})
}

app.showNavBtn = function() {
	if(app.windowSize <= 723) {
		$('.nav-btn').removeClass('invisible');
		$('.menu-items').addClass('invisible');
	}
}

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
  		app.showNavBtn();
  		console.log(app.windowSize);
	});
};

app.init = function() {
	app.windowResize();
	app.removeClassInvisible();
	app.showNavBtn();
	app.toogleMenu();
};

$(function() {
	app.init();
});
