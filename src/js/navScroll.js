

function calc_navr_dist() {


    var navRight_leftDst_Standard = parseInt($('#nav_top').css('padding-left'), 10);
    var navRight_rightDst_Standard = parseInt($('#nav_top').css('padding-right'), 10);
    var navRight_width = $('.nav_r').width();

    var body_minWidth_Standard = parseInt($('#nav_top').css('min-width'), 10);
    //transfer to LESS

    $('.nav_r').css('right', 0); //reset from last frame dist-calculation

    var navRight_offset_rightEnd = $('.nav_r').offset().left + navRight_width;
    var navRight_rightDst_calc = (body_minWidth_Standard - navRight_offset_rightEnd) * (-1);
    //$('.nav_l').html(navRight_offset_rightEnd + '   '+navRight_rightDst_calc );

    if (navRight_rightDst_calc < 0) {
        $('.nav_r').css('right', navRight_rightDst_calc);
    }
    if (navRight_rightDst_calc > 0) {
        $('.nav_r').css('right', navRight_rightDst_Standard);
    }
}


function resetOriginalValues(orig) {

    $('.nav_l').css('position', 'inherit');
    $('.nav_l').css('top', '0');

    $('.nav_r').css('position', 'inherit');
    $('.nav_r').css('top', '0');
    $('.nav_r').css('right', '0');

    if (orig != "") {
        $('#hero_text').html(orig);
    }
}


function exchangeText(){

}

$(function () {

    //std vars
    var navRight_leftDst_Standard = parseInt($('#nav_top').css('padding-left'), 10);
    var navRight_rightDst_Standard = parseInt($('#nav_top').css('padding-right'), 10);
    var navContainer_topDistance = parseInt($('#nav_top').css('z-index'), 10);
    var heroText_origHTML = $('#hero_text').html();
    var heroText_compactHTML = $('#hero_text_compactVersion').html();

    $(window).scroll(function () { //when window is scrolled
        var window_desktopWidth_bool = parseInt($('#nav_top').css('line-height'), 10);
        var navContainer_distanceTop_window= $('#parallax_bg').height() * 0.9;

        if (window_desktopWidth_bool == 1) {

            var o = (navContainer_distanceTop_window - $(document).scrollTop()); // geht mit vert-scroll
            var l = $(window).scrollLeft();
            //  $('.nav_l').html(l);
           // $('#hero_text').html(nav_std. offsettop + "   "+$(document).scrollTop() + "   " +o );

            if (o < 0) {

                $('.nav_l').css('position', 'fixed');
                $('.nav_l').css('top', navContainer_topDistance);
                $('.nav_l').css('left', navRight_leftDst_Standard - l);

                $('#hero_text').css('left', 0 - l); // texte gehen nicht mit hor-scroll, um content nicht zu überdecken

                $('.nav_r').css('position', 'fixed');
                $('.nav_r').css('top', navContainer_topDistance);
                // calc_navr_dist();
                $('.nav_r').css('right', navRight_rightDst_Standard);
                calc_navr_dist();
            }
            if (o > 0) {

                resetOriginalValues(heroText_origHTML);
            }

        }
    });

    window.onresize = function (event) {
        var window_desktopWidth_bool = parseInt($('#nav_top').css('line-height'), 10);

        if (window_desktopWidth_bool == 1) {
            calc_navr_dist();
            window_desktopWidth_bool = parseInt($('#nav_top').css('line-height'), 10);
        }

        if (window_desktopWidth_bool == 0) {
            resetOriginalValues(heroText_origHTML);
        }
    };

});










