$('#btn-menu').on('click',function(){
    $('#menu').toggleClass('movimiento_menu');
}); 
var slider = $('.slider_content')
var slider_items = $('.slider_items')


//mover ultima imagen al primer lugar
$('.slider_items:last').insertBefore('.slider_items:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.slider_items:first').insertAfter('.slider_items:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('.slider_items:last').insertBefore('.slider_items:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
$('.icon-derecha').on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

$('.icon-izquierda').on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();