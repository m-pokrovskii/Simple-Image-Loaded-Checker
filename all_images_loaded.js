var AllImagesLoaded = (function(){
	var numTotalImages, callback;

	var init = function (images, fn) {
		numTotalImages = images.length;
		callback = fn;
		[].forEach.call(images, function(img){
			if (img.complete){
				imageLoaded.call(this);
			}
			else{
				img.addEventListener( 'load', function () {
					imageLoaded.call(this);
				}, false );
			}
		});
	}

	var imageLoaded = function() {
		numTotalImages--;
		if( numTotalImages === 0 ) {
				callback();
		  }
	};

	return {
		init: init
	}
}());