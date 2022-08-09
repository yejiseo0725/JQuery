$(function () {
  let scrollTop;

  $(window).scroll(function () {
    scrollTop = $(this).scrollTop();
    $(".pos").text(scrollTop);

    $(".stars").css({
      bottom: scrollTop * 0.5 + "%",
    });
    $(".stars2").css({
      bottom: scrollTop * 0.025 + "%",
    });
    $(".header").css({
      top: scrollTop * 0.5 + "px",
    });
    $(".moon").css({
      bottom: -scrollTop * 0.5 + "px",
    });
    $(".rock").css({
      bottom: -scrollTop * 0.5 + "px",
    });
    $(".masjid").css({
      bottom: -scrollTop * 0.1 + "px",
    });

    $(".ani-text").css({
      left: 100 + -scrollTop * 0.2 + "%",
      top: 50 + scrollTop * 0.08 + "%",
    });

    $(".color-box:nth-child(2)").css({
      left: scrollTop * 0.2 + "%",
      width: "100%",
    });
  });
});
