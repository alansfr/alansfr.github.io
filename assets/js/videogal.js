$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        type: 'iframe',
        disableOn: 350,
        mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,
        key: 'vids',
		fixedContentPos: false,
        gallery:{
        enabled:true
        }
    });
});
