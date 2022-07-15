$(function () {

    const slider = $(".slider")
    let slidesCount;
    let calc;
    let currentSlide;
    let slidePer;

    slider.on("init", function (event, slick) {
        sliderCounter(slick);
        // slideCheck(slick);
        
        $(".progress").css({ width: calc * 100 + "%"});
        $(".pagingNum").text((slick.currentSlide + 1) + " / " + slick.slideCount);

    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);
        sliderCounter(slick);
        // slideCheck(slick);

        $(".pagingNum").text((nextSlide + 1) + " / " + slick.slideCount);
        $(".progress").css({ left: (nextSlide / slick.slideCount) * 100 + "%" });
    });



    // slider.on("init", function (event, slick) {
    //     sliderCounter(slick);
    //     // slideCheck(slick);
        
    //     $(".progress").css({ width: calc * 100 + "%"});
    //     $(".pagingNum").text((slick.currentSlide + 1) + " / " + slick.slideCount);

    // }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
    //     sliderCounter(slick);
    //     // slideCheck(slick);

    //     $(".pagingNum").text((nextSlide + 1) + " / " + slick.slideCount);
    //     $(".progress").css({ left: (slidesPer - calc) * 100 + "%" });
    // });

    function sliderCounter(slick) {
        // console.log(slick);
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        slidesPer = currentSlide / slidesCount;
        calc = 1 / slidesCount;
    }

    // function slideCheck(test) {
    //     console.log(test.$slides[0]);

    //     let slideItem = test.$slides;

    //     if ( $(slideItem[0]).hasClass("slick-active") ) {
    //         // alert("슬라이드1");
    //         $(".progress").css("left", "0px");
    //         $("body").css("background", "#FFC0CB");
    //     } else if ( $(slideItem[1]).hasClass("slick-active") ) {
    //         // alert("슬라이드2");
    //         $(".progress").css("left", "100px");
    //         $("body").css("background", "#FF9BAD");
    //     } else if ( $(slideItem[2]).hasClass("slick-active") ) {
    //         // alert("슬라이드3");
    //         $(".progress").css("left", "200px");
    //         $("body").css("background", "#FF7089");
    //     } else if ( $(slideItem[3]).hasClass("slick-active") ) {
    //         // alert("슬라이드4");
    //         $(".progress").css("left", "300px");
    //         $("body").css("background", "#FF4C6B");
    //     }
    // }

    $(".slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".left-btn"),
        nextArrow: $(".right-btn"),
        initialSlide: 0, // 설정에 맞추거 slick.currentSlide 도 같이 변경된다.
    });


});