$(function () {

    const mainSlide = $(".visual-slider");

    let $currentSlide;
    let $totalSlide;
    let $progressNow;
    
    mainSlide.on("init", function (event, slick) {
        $currentSlide = slick.currentSlide;
        $totalSlide = slick.slideCount;
        $progressNow = $currentSlide / ($totalSlide - 1);
        
        $(".pageNum").text(($currentSlide + 1) + " / " + $totalSlide);
        $(".progress").css({
            width: $progressNow * 100 + "%",
        });
    });

    mainSlide.on("afterChange", function (event, slick, currentSlide, nextSlide) {

        $currentSlide = slick.currentSlide;
        $totalSlide = slick.slideCount;
        $progressNow = $currentSlide / ($totalSlide - 1);

        console.log($currentSlide, $totalSlide);
        console.log($progressNow * 100);
        $(".progress").css({
            width: $progressNow * 100 + "%",
        });

        // console.log($currentSlide + 1, $totalSlide, $progressNow);

        $(".pageNum").text(($currentSlide + 1) + " / " + $totalSlide);
    });



    $('.visual-slider').slick({
        dots: true,
        arrows: false,
        variableWidth: true,
        initialSlide: 0,

        // customPaging: function (slideInfo, index) {
        //     // console.log(slideInfo.slideCount, index);
        //     totalSlideNum = slideInfo.slideCount;
        //     numbering = index + 1;
        //     console.log(totalSlideNum, numbering);
        //     return numbering + " / " + totalSlideNum;
        // }
    });

});