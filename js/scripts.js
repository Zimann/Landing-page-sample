window.onload = function() {
    //item caching/ selection
    var trigger = false;
    var $blueSandwich = $('.blue-sandwich');
    var $blackSandwich = $('.black-sandwich');
    var $hoverList = $('.hover-list');
    var $offsetNavbar = $('.offset-navbar');
    var $firstListItem = $('.p-1');
    var $dropTop1 = $('.drop-top-1');
    var $dropTop2 = $('.drop-top-2');
    var $dropTop3 = $('.drop-top-3');
    var $dropTop4 = $('.drop-top-4');
    var $dropTopLast = $('.drop-top-last');


    //button change and mobile menu sliding
    $blueSandwich.click(function() {
        $offsetNavbar.css('margin-top', '104px');
        $blackSandwich.toggle();
        $(this).toggle();
        $('.log-mobile').css('position', 'absolute');
        $offsetNavbar.css('position', 'absolute').css('overflow-y', 'none');
        trigger = true;
    });

    $blackSandwich.click(function() {
        $offsetNavbar.css('margin-top', '-800px');
        $blueSandwich.toggle();
        $(this).toggle();
        $dropTop1.css('display', 'none');
        $('.log-mobile').css('position', 'fixed');
        $offsetNavbar.css('position', 'fixed');
        trigger = false;
    });

    //reset the navbar state and the state of the drop down accessed items when resizing the window
    $(window).resize(function() {
        if (!trigger) {
            $dropTop2.css('display', 'none');
            $dropTop3.css('display', 'none');
            $dropTop4.css('display', 'none');
            $dropTopLast.css('display', 'none');
            return;
        } else if ($(window).innerWidth() > 750) {
            $blueSandwich.toggle();
            $blackSandwich.toggle();
            $offsetNavbar.css('margin-top', '-800px');
            $dropTop1.css('display', 'none');
            trigger = false;

        }
    });

    //dropdown click handling
    $('.caret').click(function(e) {
        e.preventDefault(); //force the page to stay in the same position when clicking on an item
    });
    $firstListItem.click(function() {
        $dropTop1.toggle('fast');
    });

    $('.first-footer-title').click(function(e) {
        $dropTop2.toggle('fast');
    });

    $('.tello-footer').click(function(e) {
        e.preventDefault();
        $dropTop3.toggle('fast');
    });

    $('.support-footer').click(function(e) {
        e.preventDefault();
        $dropTop4.toggle('fast');
    });

    $('.title-blog').click(function(e) {
        e.preventDefault();
        $dropTopLast.toggle('fast');
    });


    // fixed and absolute menu property switch

    $firstListItem.click(function() {
        $offsetNavbar.css('position', 'absolute').css('height', '700px');
        $('.log-mobile').css('position', 'absolute');
    });


    //top navbar hover list handling in desktop view
    $('.first-nav-item').mouseenter(function() {
        $hoverList.css('display', 'block');
    });
    $hoverList.mouseleave(function() {
        setTimeout(function() {
            $hoverList.css('display', 'none');
        }, 100);
    });




    //general function for us to re-use to switch the images with the mouseenter and mouseleave events
    function revertColors(a, b, c, d) {
        $(a).mouseenter(function() {
            $(b).attr('src', c);
        });
        $(a).mouseleave(function() {
            $(b).attr('src', d);
        });
    }

    //icon hovering image color change handling
    revertColors('.first-col-icon', '.upper-padding-icon-1', 'images/check_white.png', 'images/check_blue.png');
    revertColors('.second-col-icon', '.upper-padding-icon-2', 'images/cart_white.png', 'images/cart_blue.png');
    revertColors('.third-col-icon', '.upper-padding-icon-3', 'images/mouse_white.png', 'images/mouse_blue.png');
    revertColors('.fourth-col-icon', '.upper-padding-icon-4', 'images/heart_white.png', 'images/heart_blue.png');

};