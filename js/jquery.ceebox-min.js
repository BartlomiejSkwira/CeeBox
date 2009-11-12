//ceebox
/*
 * CeeBox 2.0.2 jQuery Plugin (minimized version)
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/ceebox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Inspiration for ceebox comes from Thickbox (http://jquery.com/demo/thickbox/) and Videobox (http://videobox-lb.sourceforge.net/)
 * However, along the upgrade path ceebox has morphed a long way from those roots.
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

(function(e){e.ceebox={version:"2.0.2"};e.fn.ceebox=function(s){s=e.extend({selector:e(this).selector},e.fn.ceebox.defaults,s);e(this).each(function(t){e.ceebox(this,t,s)});return this};e.fn.ceebox.defaults={html:true,image:true,video:true,modal:false,htmlGallery:true,imageGallery:true,videoGallery:true,videoWidth:false,videoHeight:false,videoRatio:"16:9",htmlWidth:false,htmlHeight:false,htmlRatio:false,imageWidth:false,imageHeight:false,animSpeed:"normal",easing:"swing",fadeOut:400,fadeIn:400,overlayColor:"#000",overlayOpacity:0.8,padding:15,borderWidth:"3px 3px 3px 3px",margin:150,onload:null,};e.fn.ceebox.ratios={"4:3":1.667,"3:2":1.5,"16:9":1.778,"1:1":1,square:1};e.fn.ceebox.relMatch={width:/\bwidth:[0-9]+\b/i,height:/\bheight:[0-9]+\b/i,modal:/\bmodal:true|false\b/i};e.fn.ceebox.loader="<div id='cee_load' style='z-index:105;top:50%;left:50%;position:fixed'></div>";e.ceebox=function(v,B,y){var u,A=[],t=0;(e(v).is("a[href],area[href],input[href]"))?u=e(v):u=e(v).children().andSelf().find("a[href],area[href],input[href]");var s={image:function(C,D){return(D.image)&&C.match(/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/i)||false},video:function(C,D){return(D.video)&&C.match(i)||false},html:function(C,D){return(D.html)}};u.each(function(E){var D=this;var C=e.metadata?e.extend({},y,e(D).metadata()):y;e.each(s,function(G){if(s[G](e(D).attr("href"),C)){var F=D;if(y.htmlGallery==true&&G=="html"){A[t]=E;t++}if(y.imageGallery==true&&G=="image"){A[t]=E;t++}if(y.videoGallery==true&&G=="video"){A[t]=E;t++}e(F).unbind("click").bind("click",function(I){I.preventDefault();I.stopPropagation();e.fn.ceebox.overlay();if(G=="image"){var H=new Image();H.onload=function(){var J=H.width,K=H.height;C.imageWidth=d(J,e.fn.ceebox.defaults.imageWidth);C.imageHeight=d(K,e.fn.ceebox.defaults.imageHeight);C.imageRatio=J/K;e.fn.ceebox.popup(F,e.extend(C,{type:G}))};H.src=e(F).attr("href")}else{e.fn.ceebox.popup(F,e.extend(C,{type:G}))}});return false}})});var z=A.length;e.each(A,function(E){var D=u[A[E]];if(z>1){var C={parentId:B,cbId:E,cbLen:z};if(E>0){C.prevId=A[E-1]}if(E<z-1){C.nextId=A[E+1]}e.data(D,"ceebox",C)}})};e.fn.ceebox.overlay=function(v){v=e.extend({width:60,height:30,type:"html"},e.fn.ceebox.defaults,v);var t,s,u=(v.borderWidth.match(/[0-9]+/g));if(u.length=1){s=t=Number(u)}else{if((u.length=4)){s=Number(u[0]);t=Number(u[3])}}var z=parseInt(-1*((v.width)/2+t),10);var y=parseInt(-1*((v.height)/2+s),10);var B="fixed";if(typeof document.body.style.maxHeight==="undefined"){if(e("#cee_HideSelect")===null){e("body").append("<iframe id='cb.HideSelect'></iframe>")}var B="absolute";var A=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;y=y+parseInt((A),10)}if(e("#cee_overlay").size()==0){e("<div id='cee_overlay'></div>").css({opacity:v.overlayOpacity,position:"absolute",top:0,left:0,backgroundColor:v.overlayColor,width:"100%",height:e(document).height(),zIndex:100}).appendTo(e("body")).click(function(C){l(v);return false})}if(e("#cee_box").size()==0){e("<div id='cee_box'></div>").addClass("cee_"+v.type).css({position:B,zIndex:102,top:"50%",left:"50%",height:v.height+"px",width:v.width+"px",marginLeft:z+"px",marginTop:y+"px",opacity:0,borderWidth:v.borderWidth}).appendTo("body").animate({height:v.height+"px",width:v.width+"px",opacity:1},v.animSpeed);e(e.fn.ceebox.loader).appendTo("body")}else{e("#cee_box").removeClass().addClass("cee_"+v.type)}e("#cee_load").show("fast").animate({opacity:1},"fast");this.top=y;this.left=z;return this};e.fn.ceebox.popup=function(z,y){y=e.extend({width:j(y.margin).width,height:j(y.margin).height,titleHeight:40,modal:false,type:"html",onload:null},e.fn.ceebox.defaults,y);var t,v;if(e(z).is("a,area,input")&&(y.type=="html"||y.type=="image"||y.type=="video")){t=e.data(z,"ceebox");if(t){v=e(y.selector).eq(t.parentId).contents().andSelf().find("[href]")}g.prototype=new q[y.type](y);f.prototype=new g(z,y);n[y.type].prototype=new f();var s=new n[y.type];z=s.content;y.action=s.action;y.modal=s.modal;y.titleHeight=e(s.titlebox).contents().contents().wrap("<div></div>").parent().attr("id","ceetitletest").css({position:"absolute",top:"-300px",width:s.width+"px"}).appendTo("body").height();e("#ceetitletest").remove();y.titleHeight=(y.titleHeight>=10)?y.titleHeight+20:30;y.width=s.width+2*y.padding;y.height=s.height+y.titleHeight+2*y.padding}var A=e.fn.ceebox.overlay(y);if(e("#cee_load").size()==0){e(e.fn.ceebox.loader).appendTo("body").show("fast")}function u(){e("#cee_load").hide(300).fadeOut(600);if(c(y.action)){y.action()}if(c(y.onload)){y.onload()}}e("#cee_box").animate({marginLeft:A.left,marginTop:A.top,width:y.width+"px",height:y.height+"px"},y.animSpeed,y.easing,function(){var C=e(this).append(z).children().hide();var B=C.length;C.fadeIn(y.fadeIn,function(){if(e(this).is("iframe")){e(this).load(function(){u()});var D=true}if(!D&&this==C[B-1]){u()}});if(y.modal==true){e("#cee_overlay").unbind()}else{e("<a href='#' id='cee_closeBtn' title='Close'>close</a>").prependTo("#cee_box").one("click",function(D){l(y);return false});if(t){m(t,v,y)}k(t,v,y)}});e(".cee_close").live("click",function(B){B.preventDefault();e(".cee_close").die();l(y)})};var q={image:function(s){this.width=s.imageWidth;this.height=s.imageHeight;this.ratio=s.imageRatio;return this},video:function(s){this.width=s.videoWidth;this.height=s.videoHeight;this.ratio=s.videoRatio;return this},html:function(s){this.width=s.htmlWidth;this.height=s.htmlHeight;this.ratio=s.htmlRatio;return this}};var g=function(u,y){this.rel=e(u).attr("rel");this.href=e(u).attr("href");this.title=e(u).attr("title");this.titlebox="<div id='cee_title'><h2>"+this.title+"</h2></div>";this.margin=y.margin;this.modal=y.modal;var t=this.rel;if(t&&t!=""){var s=[String(t.match(e.fn.ceebox.relMatch.modal)),String(t.match(e.fn.ceebox.relMatch.width)),String(t.match(e.fn.ceebox.relMatch.height))];if(s[0]){var v=s[0].match(/true|false/i)}if(v=="true"){this.modal=true}if(v=="false"){this.modal=false}if(s[1]){this.width=Number(s[1].match(/[0-9]+\b/))}if(s[2]){this.height=Number(s[2].match(/[0-9]+\b/))}}return this};var f=function(){var s=j(this.margin);w=d(this.width,s.width);h=d(this.height,s.height);r=this.ratio;if(r){if(!Number(r)){e.each(e.fn.ceebox.ratios,function(t,u){if(r==t){r=u;return false}});r=Number(r)||1}if(w/h>r){w=parseInt(h*r,10)}if(w/h<r){h=parseInt(w/r,10)}}this.width=w;this.height=h;return this};var j=function(s){var t=document.documentElement;s=s||100;this.width=(window.innerWidth||self.innerWidth||(t&&t.clientWidth)||document.body.clientWidth)-s;this.height=(window.innerHeight||self.innerHeight||(t&&t.clientHeight)||document.body.clientHeight)-s;this.ratio=this.width/this.height;return this};var n={image:function(){this.type="image";this.content="<img id='cee_img' src='"+this.href+"' width='"+this.width+"' height='"+this.height+"' alt='"+this.title+"'/>"+this.titlebox;return this},video:function(){var A=o(this.href,this.title,this.rel);var v=A.src;var z=A.params;var y=A.flashvars;var t=this.width;var u=this.height;this.type="video";this.action=function(){e("#cee_vid").flash({swf:v,params:z,flashvars:y,width:t,height:u})};this.content="<div id='cee_vid' style='width:"+this.width+"px;height:"+this.height+"px'></div>"+this.titlebox;return this},html:function(){var u=this.href,v=this.rel;var t=[u.match(/\w+\.com/i),u.match(/^http:+/),(v)?v.match(/^iframe/):false];this.type="html";if((document.domain==t[0]&&t[1]&&!t[2])||(!t[1]&&!t[2])){var s=u;if(u.match(/#[a-z_A-Z1-9]+/)){s=u.split("#")[0];s=String(s+" "+u.match(/#[a-z_A-Z1-9\-]+/))}this.action=function(){e("#cee_ajax").load(s)};this.content=this.titlebox+"<div id='cee_ajax' style='width:"+(this.width-30)+"px;height:"+(this.height-20)+"px'></div>"}else{e("#cee_iframe").remove();this.content=this.titlebox+"<iframe frameborder='0' hspace='0' src='"+u+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1000)+"'  style='width:"+(this.width)+"px;height:"+(this.height)+"px;' > </iframe>"}return this}};var i=/youtube\.com\/watch|metacafe\.com\/watch|google\.com\/videoplay|ifilm\.com\/video|vimeo\.com|dailymotion\.com|facebook\.com\/video|\.swf$/i;function o(z,v,A){var u=String(String(z.match(/\w+\.com/i)).match(/\w+/i));var y,C,B;C={wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"};B={autoplay:true};y=String(z.match(/http:\/\/[a-zA-Z\.]+\.com/));switch(u){case"facebook":y=y+"/v/"+z.split("v=")[1].split("&")[0];C=e.extend({movie:y},C);break;case"youtube":y=y+"/v/"+z.split("v=")[1].split("&")[0]+"&hl=en&fs=1&autoplay=1";break;case"metacafe":y=y+"/fplayer/"+z.split("id=")[1].split("&")[0]+"/.swf";break;case"google":y=y+"/googleplayer.swf?docId="+z.split("id=")[1].split("&")[0]+"&hl=en";B=e.extend({playerMode:"normal",fs:true},B);break;case"ifilm":y=y+"/efp";B=e.extend({flvbaseclip:z.split("id=")[1].split("&")[0]+"&"});break;case"vimeo":y=y+"/moogaloop.swf?clip_id="+z.split("/")[3]+"&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1";break;case"dailymotion":y=y+"/swf/"+z.split("/")[4]+"&related=0&autoplay=1";break;default:y=z;break}this.src=y;this.params=C;this.flashvars=B;return this}function l(s){e("#cee_closeBtn").unbind();e("#cee_box").fadeOut(s.fadeOut,function(){e("#cee_box,#cee_overlay,#cee_HideSelect").unbind().trigger("unload").remove()});e("#cee_overlay").fadeOut(s.fadeOut*2);e("#cee_load").remove();document.onkeydown=null;document.onkeyup=null;return false}function k(u,s,t){document.onkeydown=function(y){y=y||window.event;var v=y.keyCode||y.which;switch(v){case 27:l(t);document.onkeydown=null;break;case 188:case 37:if(u&&u.prevId!=null){a(y,s,u.prevId,t)}break;case 190:case 39:if(u&&u.nextId!=null){a(y,s,u.nextId,t)}break}}}function m(A,v,z){var t=parseInt(z.width/2);var y=z.height-z.titleHeight-2*z.padding;var u=z.padding;var B=y/2;if(z.type=="video"||z.type=="html"){t=60;y=80;u=parseInt((z.height-z.titleHeight-2*z.padding-10)/2);B=24}if(z.type=="html"){u=parseInt((z.height-z.titleHeight-10)/2)}function s(D,H){var F,G=(B-2000)+"px",C=B+"px";(D=="prev")?F=[{left:0},"left"]:F=[{right:0},x="right"];var E=function(I){return e.extend({width:t+"px",height:y+"px",position:"absolute",top:u},F[0],{backgroundPosition:F[1]+" "+I})};e("<a href='#'></a>").text(D).attr("id","cee_"+D).css(E(G)).hover(function(){e(this).css(E(C))},function(){e(this).css(E(G))}).one("click",function(I){a(I,v,H,z)}).appendTo("#cee_box")}if(A.prevId!=null){s("prev",A.prevId)}if(A.nextId){s("next",A.nextId)}e("#cee_title").append("<div id='cee_count'>Item "+(A.cbId+1)+" of "+A.cbLen+"</div>")}function a(u,t,v,s){u.preventDefault();e("#cee_box").children().fadeOut(s.fadeOut,function(){e(this).remove();if(e(this).is("[id=cee_title]")){t.eq(v).trigger("click")}})}function d(t,s){return((t&&t<s)||!s)?t:s}function p(s){return(typeof s=="object"&&s)||c(s)}function c(s){return typeof s=="function"}function b(t,s,u){if(debugging==true){var y,v="[ceebox]("+(s||"")+")";(e.isArray(t)||p(t))?e.each(t,function(z,A){y=y+z+":"+A+", "}):y=t;if(window.console&&window.console.log){window.console.log(v+y)}else{if(e("#debug").size()==0){e("<ul id='debug'></ul>").appendTo("body").css({border:"1px solid #ccf",position:"fixed",top:"10px",right:"10px",width:"300px",padding:"10px",listStyle:"square"})}e("<li>").css({margin:"0 0 5px"}).appendTo("#debug").append(v).wrapInner("<b></b>").append(" "+y)}}}})(jQuery);