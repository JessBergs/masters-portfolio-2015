$(document).ready(function(){

	
var imageLarge = document.getElementById("bgImageLinker").getAttribute('bgImagelarge'); 
var imageSmall = document.getElementById("bgImageLinker").getAttribute('bgImagesmall'); 
	 
   	var parallax_amt=-25; //offset header
	var parallax_header_minHeight=325;
	var parallax_header_maxHeight=513;
	var parallax_header_scaler=0.45;
 
// A || resize parallax header height on load 
	var plx_header_height=$(window).height()*parallax_header_scaler;
	//resize header image (height prio)
	 	//1: Get dimensions
		var plx_bgimg_size= $('#parallax_bg').css('background-size').split('px');
		var plx_bgimg_width=plx_bgimg_size[0];
		var plx_bgimg_height=plx_bgimg_size[1];
	 
		 	$('#parallax_bg').css('background-image','url('+imageSmall+')'); 
		 	$('#parallax_bg').css('background-size', '1920px 359px');
		 	$('#parallax_bg').css('height','325px');
	

	if (plx_header_height>parallax_header_minHeight)
		{
	
				$('#parallax_bg').css('background-image','url('+imageLarge+')'); 
		var plx_height_remapped=$(window).height()*parallax_header_scaler; //std. size per screen
  		 $('#parallax_bg').css('height',plx_height_remapped);
		//2: rescale, height prio (with parallax easing effect offset (top!)
		var img_scale_ratio= (plx_height_remapped+(-1.5*parallax_amt))/(plx_bgimg_height);
		$('#parallax_bg').css('background-size', plx_bgimg_size[0]*img_scale_ratio+'px '+plx_bgimg_size[1]*img_scale_ratio+'px ');
		
		}
	 else{
	
	 }
/* 
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

//B || on scroll, image ease effect
*/

	});

