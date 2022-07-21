$(function () {

    $(window).scroll(function () {

        const pos = $(this).scrollTop();
        const scrollTop = Math.floor(pos);
        $(".pos").text( "스크롤 y좌표: " + scrollTop );

    });

});