(function($, window, document, undefined) {

	// Choose language/currency


	function defaultBeh(link) {
		link.on('click', function(e){
			e.preventDefault();
		})
	}

	function changeStatus(item) {

		let subLink = item.siblings().children().children();

		defaultBeh(item);

		subLink.on('click', function() {
			
			let curVal = item.text();
			let nextVal = $(this).text();

			

			item.text('').text(nextVal);
			$(this).text('').text(curVal);

			return false;

		});
	}

	changeStatus($('.link--currency'));
	changeStatus($('.link--language'));
	
	// Search 

	$('body').on('click', function() {
		$('.purchase__search').children('input').removeClass('active').val('');
	})

	$('.purchase__search').on('click', function(e){
		e.stopPropagation();
		$(this).children('input').addClass('active');
	})

	// Filter catalog

})(jQuery, window, document);