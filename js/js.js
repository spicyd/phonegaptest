// JavaScript Document
$(document).ready(function(){
	$('.dropdown-toggle').dropdown();
	$('.navbar-toggle').click(function(){
			$('.navbar-collapse').slideToggle();
		});
	
	})

$(document).ready(function() {
$(".upload_now a").click(function(){
    $('header').addClass('.sticky');
});
});

 $('.sidbar-button a').click(function() {
        var $menu = $('.section_1_1-sidebar');
        if ($menu.is(':visible')) {
            // Slide away
            $menu.animate({ 'left': '-55%'}, function() {
                $menu.hide();
            });
        }
        else {
            // Slide in
            $menu.show().animate({ 'left': '15px'});
        }
    });
