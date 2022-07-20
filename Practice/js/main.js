$(function () {
    
    const slider = $(".slide-area");

    let $currentSlide;
    let $totalSlide;



    slider.on("init", function (event, slick) {
        $currentSlide = slick.currentSlide;
        $totalSlide = slick.slideCount;

        $(".text-area").eq($currentSlide).addClass("active");
        console.log($currentSlide, $totalSlide);

        $(".slick-dots button").eq(0).text("더현대서울점");
        $(".slick-dots button").eq(1).text("서울역점");
        $(".slick-dots button").eq(2).text("압구정점");
        $(".slick-dots button").eq(3).text("무역센터점");
        $(".slick-dots button").eq(4).text("목동점");
        $(".slick-dots button").eq(5).text("천호점");
    });
    // let test = $(".slick-dots button").text();
    // console.log(test);

    slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $currentSlide = slick.currentSlide;
        $totalSlide = slick.slideCount;

        $(".text-area").removeClass("active");
        $(".text-area").eq($currentSlide).addClass("active");
    });


    $(".text-slide").slick({
        arrows: false,
        fade: true,
        speed: 800,
    });

    $(".slide-area").slick({
        dots: true,
        arrows: false,
        variableWidth: true,
        initialSlide: 0,
        asNavFor: ".text-slide",
        speed: 800,
    });

});