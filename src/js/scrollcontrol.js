// NOT USED IN PAGE ANYMORE
$(document).ready(function(){

var scroll_height=$(window).scrollTop();
		
		$(window).scroll(function() {
		 if(scroll_height!==$(window).scrollTop()){
		   scroll_height=$(window).scrollTop();//reset
		    var max_scroll_distance=$(document).height()-$(window).height();  
				var scroll_source=-max_scroll_distance+scroll_height;
				   var scroll_eased_and_nmlz= (scroll_source*scroll_source)/(max_scroll_distance*max_scroll_distance);

 		 $('#parallax_bg').css('background-position', '50% '+scroll_eased_and_nmlz*parallax_amt+'px'); 
    }
		});
	});
	// JavaScript Document