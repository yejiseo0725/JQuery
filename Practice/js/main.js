$(function () {
    
    const slider = $(".slide-area");

    slider.on("init", function (event, slick) {
        $(".text-area").eq(slick.currentSlide).addClass("active");
        // console.log($currentSlide, $totalSlide);
    });

    slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".text-area").removeClass("active").eq(currentSlide).addClass("active");
    });


    // $(".text-slide").slick({
    //     arrows: false,
    //     fade: true,
    //     speed: 800,
    // });

    $(".slide-area").slick({
        dots: true,
        arrows: false,
        variableWidth: true,
        initialSlide: 0,
        // asNavFor: ".text-slide",
        speed: 800,
        customPaging: function (slide, i) {
            return slide.$slides.eq(i).attr("data-text");
        }
    });

});