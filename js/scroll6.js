$(function () {
  let scrollY;
  let sec2Top = $(".sec2").offset().top;
  let sec3Top = $(".sec3").offset().top;
  let sec4Top = $(".sec4").offset().top;

  $(window).scroll(function () {
    scrollY = $(this).scrollTop();
    $(".pos").text(
      "스크롤좌표 :" +
        parseInt(scrollY) +
        " 섹션2: " +
        parseInt(sec2Top) +
        " 섹션3: " +
        parseInt(sec3Top)
    );

    $(".sec4 p").css({
      transform: "translateX(" + -scrollY + "px)",
    });
  });
});
