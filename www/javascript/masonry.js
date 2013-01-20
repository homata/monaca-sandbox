// This is a JavaScript file

monaca.viewport({ width: 320 });

$(function(){
     var $container = $('#container');

    $container.imagesLoaded( function(){
			$container.masonry({
                itemSelector : '.item',
                isFitWidth: true,
                isAnimated: true
		});
	});
});