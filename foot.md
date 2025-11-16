---
layout: single
classes: wide
title: The Foot Scene
description: Video famously retweeted by Glenn
author: Glenn
header:
  og_image: /assets/images/foot/headern.jpg
  overlay_image: /assets/images/foot/headern.jpg
  overlay_filter: linear-gradient(90deg, rgba(128,0,0,0.6), rgba(128,0,0,0.1))
page_css:
 - assets/css/darkpage.css
videogallery:
  - id: foot.mp4
    provider: local
    im: MaidGlenn.jpg
    title: Now with subtitles
    subtitles: 
      - file: foot.pt.vtt
        lang: pt
      - file: foot.en.vtt
        lang: en
        default: true
excerpt: '"escorts can make lots and lots of money from <br>sexually hungry, eager guys using crystal.."<br>(Glenn Greenwald, 2003)'
sidebar:
  - title: Prequels
    image: /assets/images/foot/NYCEscort.jpg
    imagelink: true
    nav: Foot
author_profile: true
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


<style>
html > * {
	background-color: #400000;
	color: #bb3400;;
}
#site-nav  {
	background-color: #cd3f00 !important;
}
body {	
	background-image: url("/assets/images/bg.gif");
}
p
	{mso-margin-top-alt:auto;
	margin-right:0in;
	mso-margin-bottom-alt:auto;
	margin-left:0in;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	font-family:"Times New Roman";
	mso-fareast-font-family:Batang;
	color:white;} 
</style>




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
var tracke = vid.textTracks && vid.textTracks.getTrackById("track-en");
var trackp = vid.textTracks && vid.textTracks.getTrackById("track-pt");

let lang = "x";
if(window.location.search){
  // get all url search params from the query string
  const urlParams = new URLSearchParams(window.location.search);
  urllang = urlParams.get('lang');
  if(urllang){
    if(urllang == "en")
      lang = "en";
    if(urllang == "pt")
      lang = "pt";
  }
}

if(lang == "en"){
  trp.remove();
  tre.default = true;
  tracke.mode = "showing";
  trackp.mode = "disabled";
  }
if(lang == "pt"){
  tre.remove();
  trp.default = true;
  trackp.mode = "showing";
  tracke.mode = "disabled";
}
});
</script>

