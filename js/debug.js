//------------------------------ Debug function ----------------------------------------------
function debug(a,tag,opts) {
	//must turn on by setting debugging to true as a global variable
	if (debugging === true) {var bugs="", header = "[ceebox](" + (tag||"")  + ")";
		($.isArray(a) || typeof a == 'object' || typeof a == 'function') ? $.each(a, function(i, val) { bugs = bugs +i + ":" + val + ", ";}) : bugs = a;
		
		if (window.console && window.console.log) {
			window.console.log(header + bugs);
		} else {
			if ($("#debug").size() === 0) {$("<ul id='debug'></ul>").appendTo("body").css({border:"1px solid #ccf",position:"fixed",top:"10px",right:"10px",width:"300px",padding:"10px",listStyle:"square"});
			$("<li>").css({margin:"0 0 5px"}).appendTo("#debug").append(header).wrapInner("<b></b>").append(" " + bugs);}
		}
	}
}