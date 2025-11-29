---
layout: single
classes: wide
title: Glenn and his "Black God" – subtitled 
description: Video famously retweeted by Glenn
author: Glenn
minimal_mistakes_skin: "dark"
header:
  og_image: /assets/images/foot/header3.jpg
  overlay_image: /assets/images/foot/headern.jpg
  overlay_filter: linear-gradient(90deg, rgba(70,0,10,0.7), rgba(80,0,0,0.3))
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
  - image: /assets/images/foot/NYCEscort.jpg
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
      - file: foot.en.vtt
        lang: en
        default: true
after_footer_scripts:
  - assets/js/videogal.js

---



# Glenn worships his _Deus Negro_


<div class="feature__item-teaser">
{% include pop-video id=page.pv.id subtitles=page.pv.subtitles provider=page.pv.provider im=page.pv.im %}
</div>
{: .align-left}

## What is this and why is it on this site?

This video was a surprise to many when Glenn retweeted it on May 30, 2025. Glenn's allies rushed to defend him, while simultaneously insisting no defense was necessary, despite having no idea whet was going on.

*We were not so surprised*. 

Glenn has a deep relationship with the escort community going back at least 25 years which it would be generous to describe as strained. Marginalized people sometimes resort to improvised forms of justice and that is even said to have [happened to Glenn before](https://web.archive.org/web/20190803233858/https://bettercallglenn.com/um-predador-sexual-chamado-glenn-greenwald-ato-ii/).

* Glenn ran [escort services](/RioE.md) for American "sex tourists" in Rio, while having a contemptuous attitude to escorts whether in his capacity as [pimp](/hxRio.md) or [![h](/assets/images/hippopo.jpg){: .nulli}client](/assets/images/wallow.jpg).
* Glenn participated frequently in the discussion form of the most well-known male escort review site from 2002 to 2006, under various alts including [Doug69](/Doug69Links.md). He was, even by the standards of that site, extreme, controversial and disturbing. 
* Glenn's fetish for domination-submission roleplay, in which he plays either role, is described in [serious abuse allegations](/predator-part-2.md) first published in Brazil in 2019, accounts of abuse in which Glenn is [dressed as Darth Vader](https://emribeirao.com/policial/glenn-greenwald-humilhava-judeus-em-producoes-pornograficas-nazistas-nos-eua-37125/) and descriptions of him by anonymous NYC-based escorts. 


And although the first two bullet-points we listed are proven by clear documentary evidence, the third set of allegations is not. The main sources are anonymous interviews published by a partisan, although apparently rather diligent (in this area at least), journalist. For many reasons  -- some of which we have already tried to explain on this somewhat incomplete site -- it is clear they are not simply "made-up", and this video release is the most striking. We believe they deserve further investigation.


<div markdown="1">
### Support
We have just introduced (as of mid-November 2025) a support feature, motivated by the signifiant financial inducements required to cajole our Eminent Scribe into producing a Portuguese transcription of the video, as well as significant help with the finer points of translation. However there are also ongoing issues: support will be interpreted as an indicator that the site is worth maintaining and enhancing for the forseeable future.
</div>
{: .notice--info}

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

