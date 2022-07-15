$(function () {

    $('.slider').slick({
        dots: true,
        arrows: true,
        prevArrow: $('.left-btn'),
        nextArrow: $('.right-btn'),
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,

        // customPaging: function (slider, index) {
        //     // dots: true 필수! --- dots 에 연결되어 있기 때문이다.

        //     // slider 자리: slide 에 대한 모든 정보 가져옴
        //     // index 자리: 각각의 slide 의 index 를 가져옴
        //     // console.log(slider.slideCount);
        //     return index + 1 + "/" + slider.slideCount;
        // }
    });
});