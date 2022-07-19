$(function () {

    const visualSlide = $(".slider");
    let $bar_Per;
    let $totalCount;
    let $current;
    let $firstBar;
    let $changeBar;

    visualSlide.on("init", function (event, slick) {
        updateSlide_count(slick);
        $(".progress").css({
            width: $firstBar * 100 + "%",
        });
        $(".pagingNum").text($current + 1 + "/" + $totalCount);
    });

    visualSlide.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        updateSlide_count(slick, nextSlide);
        $(".progress").css({
            width: $changeBar * 100 + "%",
        });
        $(".pagingNum").text( (nextSlide + 1) + "/" + $totalCount);
    });

    function updateSlide_count(event, next) {
        // console.log(event);
        // slick 을 받아서 가져옴. 여기서의 이름은 event
        // nextSlide 를 받아서 가져옴. 여기서의 이름은 next
        $totalCount = event.slideCount;
        $current = event.currentSlide;
        $firstBar = $current / ($totalCount - 1);
        $changeBar = next / ($totalCount - 1);
    }
    

    // beforeChange 일 때는, nextSlide 를 사용하고 afterChange 일 때는, currentSlide 사용
    // client 가 원하는 반응속도를 생각해서 정해주기

    // visualSlide.on("afterChange", function (event, slick, currentSlide, nextSlide) {

    //     updateSlide_count(slick);

    //     let $position = currentSlide / $totalCount;

    //     $(".pagingNum").text( (currentSlide + 1) + "/" + $totalCount);
    //     // console.log(currentSlide, $totalCount);
    //     $(".progress").css({
    //         left: $position * 100 + "%",
    //     });
    // });

    $(".slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".left-btn"),
        nextArrow: $(".right-btn"),
        // autoplay: true,
        // autoplaySpeed: 2000,
        // infinity: true,
        initialSlide: 0, // 설정에 맞추어 slick.currentSlide 도 같이 변경된다.
    
        // slick-dots Image 처리 
        customPaging: function (slide, index) {
            // console.log(slide, index);
            // console.log(slide.$slides.eq(index).find("img").attr("src"));
            let imgSrc = slide.$slides.eq(index).find("img").attr("src");
            console.log('<img src="' + imgSrc + '">');
            return '<img src="' + imgSrc + '">'
        }

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