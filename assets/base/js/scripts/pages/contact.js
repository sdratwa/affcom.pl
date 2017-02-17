// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 52.3144954,
			lng: 18.1743043,
			scrollwheel: false
		});


		mapbg.addMarker({
			lat: 52.3175903,
			lng: 18.1626313,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Sky Camp Drop Zone</h3><p>Lotnisko Aeroklubu Konińskiego, Kazimierz Biskupi</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
});