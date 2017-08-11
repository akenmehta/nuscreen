var app = {};
app.windowSize = $(window).width();

app.toogleMenu = function() {
	$('.nav-btn').on('click', function() {
		$('.menu-items').toggleClass('invisible');
	})
};

app.showNavBtn = function() {
	if(app.windowSize <= 723) {
		$('.nav-btn').removeClass('invisible');
		$('.menu-items').addClass('invisible');
	}
	else {
		$('.nav-btn').addClass('invisible');
		$('.menu-items').removeClass('invisible');
	}
};

app.toggleClassInvisible = function() {
	if(app.windowSize <= 1007 && app.windowSize >= 623) {
		$('.last-child').removeClass('invisible');
	}
	else{
		$('.last-child').addClass('invisible');
	}
};

app.windowResize = function() {
	$(window).resize(function() {
  		app.windowSize = $(window).width();
  		app.toggleClassInvisible();
  		app.showNavBtn();
	});
};

app.init = function() {
	app.windowResize();
	app.toggleClassInvisible();
	app.showNavBtn();
	app.toogleMenu();
};

$(function() {
	app.init();
});
