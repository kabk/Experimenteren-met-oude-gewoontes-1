
$(document).ready(function(){
	
	
	
	window.onscroll = function (event) {
        setProgress(event);
		hidenotes();
	}
    
    window.onresize = function (event) {
        setProgress(event);
		hidenotes();
	}
    
    function setProgress(event){
        var scrOfY = 0;
		if( typeof( window.pageYOffset ) == 'number' ) {
			//Netscape compliant
			scrOfY = window.pageYOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
		}
		
		
		var wHeight = $(window).height();
		var tHeight = $('html').height();

		
		
		//var sum = (wHeight/tHeight) * scrOfY + 50;
        var sum = 50 + ((wHeight-50) * (scrOfY/(tHeight-wHeight)));

		$("#progress").height(sum);
		
		//console.log("window:" + wHeight + " total:" + tHeight + " scroll:" + scrOfY + " sum:" + sum);
    }
        
  
});