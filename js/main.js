
$( document ).ready(function(){
	// mobile menu
    $( '.menu-toggle-btn' ).click(function() {
        	$( this ).siblings( '.menu' ).toggleClass( 'active-menu' );
    });

    // Product List

    $('#list-view').click(function() {

		$('#content > .product-block').removeClass('products-list-block');
		$('#content > .product-block').addClass('products-grid-block');
		
		$(this).addClass('active');

		localStorage.setItem('display', 'list');
		$('.product-heading-block').addClass('no-visible');
		$('#content').addClass('grid-content');
		$('#grid-view').removeClass('active');
	});

	// Product Grid
	$('#grid-view').click(function() {

		$('#content .product-block').removeClass('products-grid-block');
		$('#content .product-block').addClass('products-list-block');

		$(this).addClass('active');

		localStorage.setItem('display', 'grid');
		$('.product-heading-block').removeClass('no-visible');
		$('#content').removeClass('grid-content');
		$('#list-view').removeClass('active');
	});

	if (localStorage.getItem('display') == 'list') {
		$('#list-view').trigger('click');
	} else {
		$('#grid-view').trigger('click');
	}

	//grid view for tablet/mobile

    if ( $(window).width() < 768 ) {
    	$('#content > .product-block').removeClass('products-list-block');
		$('#content > .product-block').addClass('products-grid-block');
    };

   	$(window).resize(function() {

	    if ( $(window).width() <= 1023 ) {
	    	$('#content > .product-block').removeClass('products-list-block');
			$('#content > .product-block').addClass('products-grid-block');
	    } else if ( $(window).width() > 1023 && $('#grid-view').hasClass('active') ) {
	    		$('#content .product-block').removeClass('products-grid-block');
				$('#content .product-block').addClass('products-list-block');	
		};

  	});

});