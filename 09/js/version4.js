$(function () {

    const mainSlide = $(".visual-slider");

    let $currentSlide;
    let $totalSlide;
    let $progressNow;

    function variableStuff(slick) {
        $currentSlide = slick.currentSlide;
        $totalSlide = slick.slideCount;
        $progressNow = $currentSlide / ($totalSlide - 1);
    }
    
    mainSlide.on("init", function (event, slick) {
        variableStuff(slick);

        $(".desc").eq($currentSlide).addClass("active");
        
        $(".pageNum").text(($currentSlide + 1) + " / " + $totalSlide);
        $(".progress").css({
            width: $progressNow * 100 + "%",
        });
    });

    mainSlide.on("afterChange", function (event, slick, currentSlide, nextSlide) {
        variableStuff(slick);

        $(".desc").removeClass("active");
        $(".desc").eq($currentSlide).addClass("active");

        // console.log($currentSlide, $totalSlide);
        // console.log($progressNow * 100);
        $(".pageNum").text(($currentSlide + 1) + " / " + $totalSlide);
        $(".progress").css({
            width: $progressNow * 100 + "%",
        });
    });



    $('.visual-slider').slick({
        dots: true,
        arrows: false,
        speed: 800,
        variableWidth: true,
        initialSlide: 0,
    });

});