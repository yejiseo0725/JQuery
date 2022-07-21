$(function () {
    const imgSlider = $(".image-slider");
    imgSlider.on("init", function (event, slick) {
        $(".textBox .items").eq(slick.currentSlide).addClass("active");
    }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".textBox .items").removeClass("active").eq(currentSlide).addClass("active");
    });
    imgSlider.slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 800,
        // initialSlide: 0,
        customPaging: function (slide, index) {
            return slide.$slides.eq(index).attr("data-text");
        }
    });

});