//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
// require slick.min.js 
//=require parallax.min.js
//=require isotope.pkgd.min.js

;(function($){

	$(window).on('load', function(){
			var $gridIsotope = $('.gallery-photo').isotope({
			  // set itemSelector so .grid-sizer is not used in layout
			  itemSelector: '.gallery-photo__item',
			  percentPosition: true,
			  masonry: {
			    // use element for option
			    columnWidth: '.gallery-photo-sizer'
			  }
			});

			$('.gallery-nav__list-item').on('click', 'a', function(event){
				event.preventDefault();
				var filterValue = $(this).data('filter');
				$gridIsotope.isotope({filter: filterValue });
				$(window).trigger('resize');
			 });
	});		

	$(document).ready(function(){
			$('.spa-parallax').parallax({imageSrc: 'img/parallax-img.jpg'});	

			$('.carousel').carousel({
			  interval: 0
			});	
	});

})(jQuery);

