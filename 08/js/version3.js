$(function () {

    const visualSlide = $(".slider");
    let $bar_Per;
    let $totalCount;
    let $current;

    function updateSlide_count(event) {
        // console.log(event);
        // slick 을 받아서 가져옴. 여기서의 이름은 event
        $totalCount = event.slideCount;
        $current = event.currentSlide;
        $bar_Per = 1 / $totalCount;
    }

    visualSlide.on("init", function (event, slick) {

        updateSlide_count(slick);

        $(".progress").css({
            width: ($bar_Per * 100) + "%",
            left: ($current / $totalCount) * 100 + "%",
             // progress bar 도 처음부터 같이 따라가게 하기 --- 초깃값 세팅 
        });
        $(".pagingNum").text($current + 1 + "/" + $totalCount);
    });

    // visualSlide.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     updateSlide_count(slick);

    //     let $position = nextSlide / $totalCount;

    //     console.log( ((nextSlide + 1) / $totalCount) * 100 );
    //     $(".pagingNum").text( (nextSlide + 1) + "/" + $totalCount);
    //     $(".progress").css({
    //         left: $position * 100 + "%",
    //     });
    // });

    // beforeChange 일 때는, nextSlide 를 사용하고 afterChange 일 때는, currentSlide 사용
    // client 가 원하는 반응속도를 생각해서 정해주기

    visualSlide.on("afterChange", function (event, slick, currentSlide, nextSlide) {

        updateSlide_count(slick);

        let $position = currentSlide / $totalCount;

        $(".pagingNum").text( (currentSlide + 1) + "/" + $totalCount);
        // console.log(currentSlide, $totalCount);
        $(".progress").css({
            left: $position * 100 + "%",
        });

        console.log($current); 
        console.log(currentSlide);
    });

    $(".slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".left-btn"),
        nextArrow: $(".right-btn"),
        initialSlide: 0, // 설정에 맞추어 slick.currentSlide 도 같이 변경된다.
    });

    // const slider = $(".slider")
    // let slidesCount;
    // let calc;
    // let currentSlide;
    // let slidePer;

    // slider.on("init", function (event, slick) {
    //     sliderCounter(slick);
    //     // slideCheck(slick);
        
    //     $(".progress").css({ width: calc * 100 + "%"});
    //     $(".pagingNum").text((slick.currentSlide + 1) + " / " + slick.slideCount);

    // }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     console.log(nextSlide);
    //     sliderCounter(slick);
    //     // slideCheck(slick);

    //     $(".pagingNum").text((nextSlide + 1) + " / " + slick.slideCount);
    //     $(".progress").css({ left: (nextSlide / slick.slideCount) * 100 + "%" });
    // });



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

    // function sliderCounter(slick) {
    //     // console.log(slick);
    //     currentSlide = slick.slickCurrentSlide() + 1;
    //     slidesCount = slick.slideCount;
    //     slidesPer = currentSlide / slidesCount;
    //     calc = 1 / slidesCount;
    // }

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




});