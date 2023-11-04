$('.snake').click(() => {
	$('.snake')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '100'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '200'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '300'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '400'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '500'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '600'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '700'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '800'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '900'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1000'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1100'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1200'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1300'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1400'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1500'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1600'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1700'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1800'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '1900'}, '800')
		.animate({width: '300'}, '900')
		.animate({width: '200',left:  '2000'}, '800')
		.animate({width: '200',left:  '0'}, 21000);

	$('.pak, .d22, .d19, .d18, .d16, .d17')
		.animate({left: '2000'}, 19000)
		.animate({left: '0'}, 10000);

	$('.pusher')
		.animate({left: '80px'}, 3400)
		.animate({left: '-=80px'}, 3700);

	$('.button').hide(500);

	$('.ball-dialog')
		.css({opacity: '1'}, 1000)
		.animate({opacity: '0'}, 1500);
});
