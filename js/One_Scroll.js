$(function () {
  $("#fullpage").fullpage({
    menu: "#menu",
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],
    // 이름은 data-menuanchor 와 똑같이 사용하기

    // sectionsColor: ["red", "orangered", "dodgerblue", "yellowgreen", "gold"], // css 대신 background-color 변경
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["first", "second", "third"],
    // slidesNavigation: true,
    // slidesNavPosition: "bottom",
    scrollBar: false,
    keyboardScrolling: true,
    fixedElements: "#header, .footer",

    // Slide Arrows
    controlArrows: true,
    controlArrowsHTML: ['<div class="fp-arrow"></div>'],

    // Responsive
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    afterLoad: function (origin, destination, direction) {
      // 기준이 되는 index 의 양방향에서 event 발생
      if (origin.index === 1) {
        // alert("오리진");
      }

      // 도착지가 기준 index 일 때 event 발생
      if (destination.index === 1) {
        // alert("destination");
        $(".s2").addClass("color");
      } else {
        $(".s2").removeClass("color");
      }
    },
  });
});
