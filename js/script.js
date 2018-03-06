/**********************************
The main header uses 100vh, so we want the content
to always be centered, no matter the viewport height
when the browser's height changes, we recalculate
the top margin to center the content, then update it
I didn't set it to change on resize, because this is
only necessary for different device heights, so on load
is suffice.
**********************************/
var centerJumboText = function() {
    'use strict';
    var $mainHeader = $('#main');
    var $mainIntro = $('#intro');
    var $navbar = $('.navbar');
    var topHeaderContentPadding = (($mainHeader.height() - $mainIntro.height()) / 2) - $navbar.height();
    $mainIntro.css('margin-top', topHeaderContentPadding + 'px');
};

var toggleMenu = function() {
	$dropDown = $('.dropdown');
	$('.menu-open').on('click', function() {
		$dropDown.slideToggle();	
		console.log('run it');
	});
};

$(function() {
	centerJumboText();
	toggleMenu();
});
