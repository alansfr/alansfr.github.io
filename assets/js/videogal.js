$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-embed, .popup-legacy').magnificPopup({
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

    $('.openVideo').magnificPopup({
    type: 'inline',
    key: "mainvid",
    fixedContentPos: true,
    alignTop: true,
    preloader: false,
    removalDelay: 100,
    midClick: true,
    callbacks: {
        open: function() {
        $('html').css('margin-right', 0);
        // Play video on open:
        $(this.content).find('video')[0].play();
        },
        close: function() {
        // Reset video on close:
        $(this.content).find('video')[0].load();
        }
    }
});
    
});
