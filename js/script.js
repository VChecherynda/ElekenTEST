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

	// Search 

	let searchItem = $('.purchase__search');

	function search(item) {
		$('body').on('click', function() {
			item.children('input').removeClass('active').val('');
		})

		item.on('click', function(e){
			e.stopPropagation();
			$(this).children('input').addClass('active');
		})
	}

	// Filter catalog

	let catalogItem = $('.navigation--catalog').children().children();
	let items = $('.catalog__item');

	function filterCatalog() {
		catalogItem.on('click', function(){

			let category = $(this).attr('data-category');

			if( category != 'all' ) {
				items.hide(200).filter('[data-category ='+ category +']').show(500);
			} else {
				items.show(500);
			}		

			// console.log($(this).attr('data'));

			return false;
		});
	}

	search(searchItem);

	changeStatus($('.link--currency'));
	changeStatus($('.link--language'));
	
	filterCatalog();


})(jQuery, window, document);