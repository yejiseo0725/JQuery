$(function () {

    $('.slider').slick({
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: $('.left-btn'),
        nextArrow: $('.right-btn'),

        // slick-dots Image 처리 
        // customPaging: function (slider, index) {
        //     console.log(slider.$slides.eq(index).find("img").attr("src"));
        //     let targetImage = slider.$slides.eq(index).find("img").attr("src");
        //     return '<img src="' + targetImage + '">';
        // }

        // slick-dots Paging 처리
        // customPaging: function (a, b) {
        //     console.log(b+1, a.slideCount);
        //     return b+1 + "/" + a.slideCount;
        // }

        // customPaging: function (slider, index) {
        //     // dots: true 필수! --- dots 에 연결되어 있기 때문이다.

        //     // slider 자리: slide 에 대한 모든 정보 가져옴
        //     // index 자리: 각각의 slide 의 index 를 가져옴
        //     console.log(slider.slideCount);
        //     return index + 1 + "/" + slider.slideCount;
        // }
    });

    // Initionalize 
    $('.slider').on("init", function (event, slick) {
            
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // console.log(nextSlide);
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
        // console.log(currentSlide);
        // $(".box p").addClass("active");
        checkSlide();
    });

    function checkSlide() {
        // slick-slide 의 00 번째 item 에 slick-active 라는 class 가 있는지 검사 ---> True or False
        if ($("#slick-slide00").hasClass("slick-active")) {
            $(".box .child1").addClass("active");
        } else if ($("#slick-slide01").hasClass("slick-active")) {
            $(".box .child2").addClass("active");
        } else if ($("#slick-slide02").hasClass("slick-active")) {
            $(".box .child3").addClass("active");
        } else {
            $(".box .child4").addClass("active");
        }
    }
})