//ceebox
/*
 * Ceebox 1.4 jQuery Plugin - Minimized via YUI compressor
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/CeeBox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Inspiration for CeeBox comes from Thickbox (http://jquery.com/demo/thickbox/) and Videobox (http://videobox-lb.sourceforge.net/)
 * However, along the upgrade path CeeBox has morphed a long way from those roots.
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

(function(a){a.ceebox={version:"1.4"};a.fn.ceebox=function(f){f=jQuery.extend({vidWidth:false,vidHeight:false,htmlWidth:false,htmlHeight:false},f);a(this).each(function(){if(a(this).is("a")||a(this).is("area")||a(this).is("input")){a(this).bind("click",function(){a.ceebox.show(this.title||this.name||this.t||"",this.href||this.alt,this.rel||false);a(this).blur();return false})}});a.ceebox.show=function(y,v,o){if(typeof document.body.style.maxHeight==="undefined"){a("html").css("overflow","hidden");if(a("#cee_HideSelect")===null){a("body").append("<iframe id='cee_HideSelect'></iframe>")}}if(a.browser.opera){a("body").append("<span style='line-height:0px;color:rgba(0,0,0,0)' rel='lame opera hack'>-</span>")}box=document.createElement("div");overlay=document.createElement("div");cee_closeBtn="<a href='#' id='cee_closeBtn' title='Close'>close</a>";a(overlay).attr("id","cee_overlay");a(box).attr("id","cee_box");(g())?a(overlay).addClass("cee_overlayMacFFBGHack"):a(overlay).addClass("cee_overlayBG");a("body").append("<div id='cee_load'></div>");a("#cee_load").show();var p=(v.indexOf("?")!==-1)?v.substr(0,v.indexOf("?")):v;urlString=/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$|\.swf$|\.htm$|\.html$|\.asp$|\.aspx$/;var A=p.toLowerCase().match(urlString);var x=(!f.vidWidth||!f.vidHeight)?d(o):[f.vidWidth,f.vidHeight];var w=(!f.htmlWidth||!f.htmlHeight)?d(o):[f.htmlWidth,f.htmlHeight];var z=[[(!v.match(/^http:+/)&&(o&&!o.match("iframe")))||(o&&o.match("ajax"))||false,"ajax"],[A==".jpg"||A==".jpeg"||A==".png"||A==".gif"||A==".bmp"||false,"image"],[v.match(/youtube\.com\/watch/i)||false,"youtube"],[v.match(/metacafe\.com\/watch/i)||false,"metacafe"],[v.match(/google\.com\/videoplay/i)||false,"google"],[v.match(/ifilm\.com\/video/i)||false,"ifilm"],[v.match(/vimeo\.com/i)||false,"vimeo"],[v.match(/dailymotion\.com/i)||false,"dailymotion"],[v.match(/facebook\.com\/video/i)||false,"facebook"]];var u=z.length;var q;do{if(z[u-1][0]){var q=z[u-1][1];break}}while(--u);switch(q){case"image":h(y,v,o);break;case"facebook":var n="http://www.facebook.com/v/"+v.split("v=")[1].split("&")[0];var s={wmode:"transparent",movie:n,allowFullScreen:"true",allowScriptAccess:"always",flashvars:{autoplay:true}};m(n,x,y,s);break;case"youtube":var n="http://www.youtube.com/v/"+v.split("v=")[1].split("&")[0]+"&hl=en&fs=1&autoplay=1";var s={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"};m(n,x,y,s);break;case"metacafe":var n="http://www.metacafe.com/fplayer/"+v.split("id=")[1].split("&")[0]+"/.swf";var s={wmode:"transparent"};m(n,x,y,s);break;case"google":n="http://video.google.com/googleplayer.swf?docId="+v.split("id=")[1].split("&")[0]+"&hl=en";s={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always",flashvars:{autoplay:true,playerMode:"normal",fs:true}};m(n,x,y,s);break;case"ifilm":n="http://www.ifilm.com/efp";s={wmode:"transparent",flashvars:{flvbaseclip:v.split("id=")[1].split("&")[0]+"&"}};m(n,x,y,s);break;case"vimeo":n="http://www.vimeo.com/moogaloop.swf?clip_id="+v.split("/")[3]+"&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1";s={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"};m(n,x,y,s);break;case"dailymotion":n="http://www.dailymotion.com/swf/"+v.split("/")[4]+"&related=0&autoplay=1";s={allowFullScreen:"true",allowScriptAccess:"always"};m(n,x,y,s);case"ajax":j(y,v,o,w);break;default:i(y,v,o,w)}};function g(){var n=navigator.userAgent.toLowerCase();if(n.indexOf("mac")!=-1&&n.indexOf("firefox")!=-1){return true}}function d(q){var t=e();var n=t[0]-150;var p=t[1]-150;var o=new Array();if(q&&q.match(/[0-9]+/g)){var o=q.match(/[0-9]+/g);o[0]=(o[0])?o[0]*1:n;o[1]=(o[1])?o[1]*1:p}else{o=[n,p]}return o}function e(){var q=document.documentElement;var n=window.innerWidth||self.innerWidth||(q&&q.clientWidth)||document.body.clientWidth;var o=window.innerHeight||self.innerHeight||(q&&q.clientHeight)||document.body.clientHeight;var p=[n,o];return p}function h(z,q,n){if(n){var s=a("a[rel="+n+"]").get();var o=s.length;var p=o;var x="",w="";do{if(s[p-1].href==q){var v=p;break}}while(--p);var y="Image "+(p)+" of "+(o);if(v>1){var w="<a href='#' id='cee_prev'>Previous</a>"}if(v<o){var x="<a href='#' id='cee_next'>Next</a>"}}else{var y="";var w="";var x=""}var u=new Image();u.onload=function(){u.onload=null;var F=e();var r=F[0]-150;var E=F[1]-150;var A=u.width;var D=u.height;if(A>r){A=r;D=D*(r/A)}if(D>E){A=A*(E/D);D=E}var t=A+30;l("<img id='cee_img' src='"+q+"' width='"+A+"' height='"+D+"' alt='"+z+"'/><div id='cee_nav' style='width:"+t+"px;height:"+D+"px'>"+w+x+"</div><div id='cee_cap'>"+z+"<div id='cee_count'>"+y+"</div></div>"+cee_closeBtn,A+30,D+60);if(w!=""){function C(){document.onkeydown=null;if(a(document).unbind("click",C)){a(document).unbind("click",C)}a("#cee_box").remove();a.ceebox.show(s[v-2].title,s[v-2].href,n);return false}a("#cee_prev").click(C)}if(x!=""){function B(){document.onkeydown=null;a("#cee_box").remove();a.ceebox.show(s[v].title,s[v].href,n);return false}a("#cee_next").click(B)}document.onkeydown=function(H){H=H||window.event;var G=H.keyCode||H.which;if(G==27){b()}else{if(G==190||G==39){if(x!=""){B()}}else{if(G==188||G==37){if(w!=""){C()}}}}}};u.src=q}function j(n,p,q,o){var s=[o[0],o[1]-5];if(a("#cee_box").css("display")!="block"){if(q&&q.match("modal")){a("#cee_overlay").unbind();l("<div id='cee_ajax' class='cee_modal' style='width:"+s[0]+"px;height:"+s[1]+"px;'></div>",o[0]+30,o[1]+40)}else{l("<div id='cee_title'><div id='cee_ajaxTitle'>"+n+"</div>"+cee_closeBtn+"</div><div id='cee_ajax' style='width:"+s[0]+"px;height:"+s[1]+"px'></div>",o[0]+30,o[1]+40)}}else{a("#cee_ajaxContent")[0].style.width=s[0]+"px";a("#cee_ajaxContent")[0].style.height=s[1]+"px";a("#cee_ajaxContent")[0].scrollTop=0;a("#cee_ajaxWindowTitle").html(caption)}if(q&&q.match(/#[a-z_A-Z1-9]+/)){targetId=q.match(/#[a-z_A-Z1-9]+/);a("#cee_ajax").load(p+" "+targetId)}else{a("#cee_ajax").load(p)}a("#cee_ajax a.ceebox").ceebox();k()}function i(o,q,s,p){var u=[p[0]+29,p[1]+12];a("#cee_iframe").remove();if(s&&s.match("modal")){a("#cee_overlay").unbind();var n="<iframe frameborder='0' hspace='0' src='"+q+"' id='cee_iframe' name='cee_iframe"+Math.round(Math.random()*1000)+"' onload='$.ceebox.showIframe()' style='width:"+u[0]+"px;height:"+u[1]+"px;'> </iframe>"}else{var n="<div id='cee_title'><div id='cee_ajaxTitle'>"+o+"</div>"+cee_closeBtn+"</div><iframe frameborder='0' hspace='0' src='"+q+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"' onload='$.ceebox.showIframe()' style='width:"+u[0]+"px;height:"+u[1]+"px;' > </iframe>"}l(n,p[0]+30,p[1]+40);k()}a.ceebox.showIframe=function(){a("#cee_load").remove();a("#cee_window").css({display:"block"})};function b(){a("#cee_imgBtn").unbind("click");a("#cee_closeBtn").unbind("click");a("#cee_box").fadeOut("fast",function(){a("#cee_box,#cee_overlay,#cee_HideSelect").unbind().trigger("unload").remove()});a("#cee_load").remove();if(typeof document.body.style.maxHeight=="undefined"){a("body","html").css({height:"auto",width:"auto"});a("html").css("overflow","")}document.onkeydown=null;document.onkeyup=null;return false}function c(n,o){a("#cee_box").css({marginLeft:"-"+parseInt((n/2),10)+"px",width:n+"px"});if(!(jQuery.browser.msie&&jQuery.browser.version<7)){a("#cee_box").css({marginTop:"-"+parseInt((o/2),10)+"px"})}}function m(n,q,o,r){l("<div id='cee_vid'></div><div id='cee_cap'>"+o+"</div>"+cee_closeBtn,q[0]+30,q[1]+60);k();a("#cee_vid").flash({swf:n,width:q[0],height:q[1],params:r})}function k(){document.onkeyup=function(n){n=n||window.event;(n.keyCode==27||n.which==27)?b():false}}function l(p,n,o){if(a("#cee_overlay").size()==0){a(overlay).appendTo(a("body")).click(b)}a(box).appendTo("body").append(p);a("#cee_closeBtn").click(b);c(n,o);a("#cee_load").remove();a("#cee_box").css({display:"block"})}}})(jQuery);