---
layout: single
classes: wide
title: The Foot Scene
description: Video famously retweeted by Glenn
minimal_mistakes_skin: dark
page_css:
 - assets/css/darkpage.css
videogallery:
  - id: foot.mp4
    provider: local
    im: MaidGlenn.jpg
    title: Master Ferraz
    subtitles: 
      - file: foot.pt.vtt
        lang: pt
        default: true
      - file: foot.en.vtt
        lang: en  
excerpt: Glenn's famous retweet.
pv:
  id: foot.mp4
  provider: local
  im: MaidGlenn.jpg
  title: Master Ferraz
  subtitles: 
    - file: foot.pt.vtt
      lang: pt
      default: true
after_footer_scripts:
  - assets/js/videogal.js
---




{% include videogallery type="center" %}





<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="masternotions" data-color="#a93c00" data-emoji="☕"  data-font="Comic" data-text="More of this please!" data-outline-color="#222222" data-font-color="#000000" data-coffee-color="#996600" ></script>


<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="masternotions" data-description="Support me on Buy me a coffee!" data-message="New Tip Feature!" data-color=" #dc4f00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>


<!-- F’in sweet Webflow Hacks -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>
// if the page url has a query string
$( document ).ready(function(){

var trp = document.getElementById("track-pt");
var tre = document.getElementById("track-en");
var vid = document.querySelector("video");
var lang = "pt";
if(window.location.search){
  // get all url search params from the query string
  const urlParams = new URLSearchParams(window.location.search);
  urllang = urlParams.get('lang');
  if(urllang && urllang == "en")
    lang = "en";
}

if(lang == "en"){
  trp.remove();
  tre.default = true;
  var track = vid.textTracks && vid.textTracks[0];
  track.mode = "showing";
  }
else{
  tre.remove();    
}
});
</script>

