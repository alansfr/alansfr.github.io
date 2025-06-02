$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-local').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
        key: 'vids',
		fixedContentPos: false,
        gallery:{
        enabled:true
        }
    });
    
});
