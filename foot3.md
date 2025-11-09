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

<!-- F’in sweet Webflow Hacks -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script>
// if the page url has a query string
$( document ).ready(function(){
if(window.location.search){
  // get all url search params from the query string
  const urlParams = new URLSearchParams(window.location.search);

  const lang = urlParams.get('lang');
  if(lang == "en"){
    var tr = document.getElementById("deftrack");
    tr.srclang = "en";
    tr.src = "assets/video/foot.en.vtt"
  }
  // get the value of the 'company' search param
 
}
});
</script>

