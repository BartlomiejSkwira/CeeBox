//ceebox
/*
 * Ceebox 1.3.2 (minimized using the YUI Online Compressor http://yui.2clics.net/)
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/CeeBox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Adapted from Thickbox (http://jquery.com/demo/thickbox/) Copyright (c) 2007 Cody Lindley (http://www.codylindley.com)
 * Video pop-up code inspired by Videobox (http://videobox-lb.sourceforge.net/)
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

// BASE SETTINGS - Edit to your liking
// path to loading animationChange base settings below.
var pathToLoadingAnim = "../images/loadinganimation.gif";

// Base Width and Height for html boxes 
// if set to false, size is set automatically by size of browser window. Can be set to a static size (ie, var vidBaseW = 480; var vidBaseH = 359;).
var htmlBaseW = false;
var htmlBaseH = false;
// Base Width and Height for video boxes
// if set to false, size is set automatically by size of browser window. Can be set to a static size (ie, var vidBaseW = 480; var vidBaseH = 359;).
var vidBaseW = false;
var vidBaseH = false;

/*!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
$(document).ready(function(){cee_init("a.ceebox, area.ceebox, input.ceebox");imgLoader=new Image();imgLoader.src=pathToLoadingAnim;if($.browser.opera){$("body").append("<span style='line-height:0px;color:rgba(0,0,0,0)'>lame opera hack</span>")}});function cee_init(a){$(a).click(function(){var c=this.title||this.name||null;var b=this.href||this.alt;var d=this.rel||false;cee_show(c,b,d);this.blur();return false})}function cee_show(m,b,n){try{if(typeof document.body.style.maxHeight==="undefined"){$("body","html").css({height:"100%",width:"100%"});$("html").css("overflow","hidden");if(document.getElementById("cee_HideSelect")===null){$("body").append("<iframe id='cee_HideSelect'></iframe><div id='cee_overlay'></div><div id='cee_window'></div>");$("#cee_overlay").click(cee_remove)}}else{if(document.getElementById("cee_overlay")===null){$("body").append("<div id='cee_overlay'></div><div id='cee_window'></div>");$("#cee_overlay").click(cee_remove)}}(cee_detectMacXFF())?$("#cee_overlay").addClass("cee_overlayMacFFBGHack"):$("#cee_overlay").addClass("cee_overlayBG");if(m===null){m=""}$("body").append("<div id='cee_load'><img src='"+imgLoader.src+"' /></div>");$("#cee_load").show();var c=(b.indexOf("?")!==-1)?b.substr(0,b.indexOf("?")):b;var h=/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.swf$|\.htm$|\.html$|\.asp$|\.aspx$/;var o=c.toLowerCase().match(h);var l=cee_getSize(n,vidBaseW,vidBaseH);var j=cee_getSize(n,htmlBaseW,htmlBaseH);if(o==".jpg"||o==".jpeg"||o==".png"||o==".gif"||o==".bmp"){imgs={pCap:"",pUrl:"",pHtml:"",nCap:"",nUrl:"",nHtml:"",count:"",fUrl:false};if(n){cee_TempArray=$("a[rel="+n+"]").get();for(i=0;((i<cee_TempArray.length)&&(imgs.nHtml===""));i++){var g=cee_TempArray[i].href.toLowerCase().match(h);if(!(cee_TempArray[i].href==b)){if(imgs.fUrl){imgs.nCap=cee_TempArray[i].title;imgs.nUrl=cee_TempArray[i].href;imgs.nHtml="<span id='cee_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>"}else{imgs.pCap=cee_TempArray[i].title;imgs.pUrl=cee_TempArray[i].href;imgs.pHtml="<span id='cee_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>"}}else{imgs.fUrl=true;imgs.count="Image "+(i+1)+" of "+(cee_TempArray.length)}}}imgPreloader=new Image();imgPreloader.onload=function(){imgPreloader.onload=null;var p=cee_getPageSize();var e=p[0]-150;var u=p[1]-150;var q=imgPreloader.width;var t=imgPreloader.height;if(q>e){q=e;t=t*(e/q)}if(t>u){q=q*(u/t);t=u}$("#cee_window").append("<a href='' id='cee_ImageOff' title='Close'><img id='cee_Image' src='"+b+"' width='"+q+"' height='"+t+"' alt='"+m+"'/></a><div id='cee_caption'>"+m+"<div id='cee_secondLine'>"+imgs.count+imgs.pHtml+imgs.nHtml+"</div></div><div id='cee_closeWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div>");$("#cee_closeWindowButton").click(cee_remove);if(imgs.pHtml!=""){function s(){document.onkeydown=null;if($(document).unbind("click",s)){$(document).unbind("click",s)}$("#cee_window").remove();$("body").append("<div id='cee_window'></div>");cee_show(imgs.pCap,imgs.pUrl,n);return false}$("#cee_prev").click(s)}if(imgs.nHtml!=""){function r(){document.onkeydown=null;$("#cee_window").remove();$("body").append("<div id='cee_window'></div>");cee_show(imgs.nCap,imgs.nUrl,n);return false}$("#cee_next").click(r)}document.onkeydown=function(w){w=w||window.event;var v=w.keyCode||w.which;if(v==27){cee_remove()}else{if(v==190||v==39&&imgs.nHtml!=""){r()}else{if(v==188||v==37&&imgs.pHtml!=""){s()}}}};cee_position(q+30,t+60);$("#cee_load").remove();$("#cee_ImageOff").click(cee_remove);$("#cee_window").css({display:"block"})};imgPreloader.src=b}else{if(o==".swf"&&!b.match(/metacafe\.com\/watch/i)){var a=b;var f={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always",flashvars:{autoplay:true}};cee_vidWindow(a,l,m,f)}else{if(b.match(/youtube\.com\/watch/i)){var d=b.split("v=")[1].split("&")[0];var a="http://www.youtube.com/v/"+d+"&hl=en&fs=1&autoplay=1";var f={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"};cee_vidWindow(a,l,m,f)}else{if(b.match(/google\.com\/videoplay/i)){var d=b.split("id=")[1].split("&")[0];var a="http://video.google.com/googleplayer.swf?docId="+d+"&hl=en";var f={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always",flashvars:{autoplay:true,playerMode:"normal",fs:true}};cee_vidWindow(a,l,m,f)}else{if(b.match(/metacafe\.com\/watch/i)){var d=b.split("id=")[1].split("&")[0];var a="http://www.metacafe.com/fplayer/"+vidID+"/.swf";var f={wmode:"transparent"};cee_vidWindow(a,l,m,f)}else{if(b.match(/ifilm\.com\/video/i)){var d=b.split("id=")[1].split("&")[0];var a="http://www.ifilm.com/efp";var f={wmode:"transparent",flashvars:{flvbaseclip:d+"&"}};cee_vidWindow(a,l,m,f)}else{if(b.match(/vimeo\.com/i)){var d=b.split("/")[3];var a="http://www.vimeo.com/moogaloop.swf?clip_id="+d+"&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1";var f={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always",flashvars:{autoplay:1}};cee_vidWindow(a,l,m,f)}else{if(b.match(/dailymotion\.com/i)){var d=b.split("/")[4];var a="http://www.dailymotion.com/swf/"+d+"&related=0&autoplay=1";var f={allowFullScreen:"true",allowScriptAccess:"always"};cee_vidWindow(a,l,m,f)}else{if((!b.match(/^http:+/)&&(n&&!n.match("iframe")))||(n&&n.match("ajax"))){ajaxSize=[j[0],j[1]-5];if($("#cee_window").css("display")!="block"){if(n&&n.match("modal")){$("#cee_overlay").unbind();$("#cee_window").append("<div id='cee_ajaxContent' class='cee_modal' style='width:"+ajaxSize[0]+"px;height:"+ajaxSize[1]+"px;'></div>")}else{$("#cee_window").append("<div id='cee_title'><div id='cee_ajaxWindowTitle'>"+m+"</div><div id='cee_closeAjaxWindow'><a href='#' id='cee_closeWindowButton'>close</a> or Esc Key</div></div><div id='cee_ajaxContent' style='width:"+ajaxSize[0]+"px;height:"+ajaxSize[1]+"px'></div>")}}else{$("#cee_ajaxContent")[0].style.width=ajaxSize[0]+"px";$("#cee_ajaxContent")[0].style.height=ajaxSize[1]+"px";$("#cee_ajaxContent")[0].scrollTop=0;$("#cee_ajaxWindowTitle").html(m)}$("#cee_closeWindowButton").click(cee_remove);if(n&&n.match(/#[a-z_A-Z1-9]+/)){targetId=n.match(/#[a-z_A-Z1-9]+/);$("#cee_ajaxContent").load(b+" "+targetId)}else{$("#cee_ajaxContent").load(b)}cee_position(j[0]+30,j[1]+40);$("#cee_load").remove();cee_init("#cee_ajaxContent a.ceebox");$("#cee_window").css({display:"block"});document.onkeyup=function(p){p=p||window.event;(p.keyCode==27||p.which==27)?cee_remove():false}}else{iframeSize=[j[0]+29,j[1]+12];$("#cee_iframeContent").remove();if(n&&n.match("modal")){$("#cee_overlay").unbind();$("#cee_window").append("<iframe frameborder='0' hspace='0' src='"+b+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"' onload='cee_showIframe()' style='width:"+iframeSize[0]+"px;height:"+iframeSize[1]+"px;'> </iframe>")}else{$("#cee_window").append("<div id='cee_title'><div id='cee_ajaxWindowTitle'>"+m+"</div><div id='cee_closeAjaxWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+b+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"' onload='cee_showIframe()' style='width:"+iframeSize[0]+"px;height:"+iframeSize[1]+"px;' > </iframe>")}$("#cee_closeWindowButton").click(cee_remove);cee_position(j[0]+30,j[1]+40);if($.browser.safari){$("#cee_load").remove();$("#cee_window").css({display:"block"})}document.onkeyup=function(p){p=p||window.event;(p.keyCode==27||p.which==27)?cee_remove():false}}}}}}}}}}}catch(k){}}function cee_showIframe(){$("#cee_load").remove();$("#cee_window").css({display:"block"})}function cee_remove(){$("#cee_imageOff").unbind("click");$("#cee_closeWindowButton").unbind("click");$("#cee_window").fadeOut("fast",function(){$("#cee_window,#cee_overlay,#cee_HideSelect").unbind().trigger("unload").remove()});$("#cee_load").remove();if(typeof document.body.style.maxHeight=="undefined"){$("body","html").css({height:"auto",width:"auto"});$("html").css("overflow","")}document.onkeydown=null;document.onkeyup=null;return false}function cee_position(a,b){$("#cee_window").css({marginLeft:"-"+parseInt((a/2),10)+"px",width:a+"px"});if(!(jQuery.browser.msie&&jQuery.browser.version<7)){$("#cee_window").css({marginTop:"-"+parseInt((b/2),10)+"px"})}}function cee_getSize(a,d,e){var b=cee_getPageSize();(d)?d=d*1:d=b[0]-150;(e)?e=e*1:e=b[1]-150;var c=new Array();if(a&&a.match(/[0-9]+/g)){c=a.match(/[0-9]+/g);c[0]=(c[0])?c[0]*1:d;c[1]=(c[1])?c[1]*1:e}else{c=[d,e]}return c}function cee_vidWindow(a,b,e,d){$("#cee_window").append("<div id='cee_video'></div><div id='cee_caption'>"+e+"</div><div id='cee_closeWindow'><a href='#' id='cee_closeWindowButton' title='Close'>close</a> or Esc Key</div>");$("#cee_closeWindowButton").click(cee_remove);cee_position(b[0]+30,b[1]+60);document.onkeyup=function(c){c=c||window.event;(c.keyCode==27||c.which==27)?cee_remove():false};$("#cee_video").flash({swf:a,width:b[0],height:b[1],params:d});$("#cee_load").remove();$("#cee_window").css({display:"block"})}function cee_getPageSize(){var c=document.documentElement;var a=window.innerWidth||self.innerWidth||(c&&c.clientWidth)||document.body.clientWidth;var b=window.innerHeight||self.innerHeight||(c&&c.clientHeight)||document.body.clientHeight;arrayPageSize=[a,b];return arrayPageSize}function cee_detectMacXFF(){var a=navigator.userAgent.toLowerCase();if(a.indexOf("mac")!=-1&&a.indexOf("firefox")!=-1){return true}};