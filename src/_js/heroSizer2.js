	function heroSizer(){
			var windowHeroRatio= parseInt($('#hero_video').css('letter-spacing')); //stand-in css-props in CSS as vars for storing media query values!
			var hero_maxHeight= parseInt($('#hero_video').css('line-height'));
			var hero_minHeight= parseInt($('#hero_video').css('font-size'));
			var hero_textoffset=60;
		//var hero_textoffset= parseInt($('#hero_video').css('font-size-adjust'));	
		
			var windowheight=$(window).height();
			var headerheight=windowheight*windowHeroRatio;
		    
		    if (headerheight<hero_minHeight){headerheight=hero_minHeight;}
			if (headerheight>hero_maxHeight){headerheight=hero_maxHeight;} 
			$('#hero_video_layouter').css('height', headerheight+'px');
			//$('#hero_video').css('height', hheight+'px');
				
		
			var text_baseheight=headerheight-$('#hero_text').height();
			var t_translate=(text_baseheight)-(hero_textoffset);
  			$('#hero_text').css('top',t_translate+'px');	
	}
	
	$(document).ready(function(){
			heroSizer();			//	$('#hero_text').html(window.devicePixelRatio);
		});
	window.onresize = function(event){
		heroSizer();
	}	;			  
// JavaScript Document