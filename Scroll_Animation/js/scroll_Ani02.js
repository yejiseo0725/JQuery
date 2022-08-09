$(function () {
  let scrollTop;

  $(window).scroll(function () {
    scrollTop = $(this).scrollTop();

    $(".header").css({
      top: scrollTop * 0.5 + "px",
    });
    $(".moon").css({
      top: scrollTop * 1.2 + "px",
    });
    $(".stars").css({
      top: -scrollTop * 1.3 + "px",
      left: scrollTop * 0.35 + "px",
    });
    $(".mount_behind").css({
      top: scrollTop * 0.2 + "px",
    });
    // $(".mount_front").css({
    //   top: scrollTop * 0.2 + "px",
    // });
    $(".ani-text").css({
      marginRight: scrollTop * 3.5 + "px",
      marginTop: scrollTop * 1.2 + "px",
    });
    $(".btn").css({
      transform: "translateY(" + (100 + scrollTop * 0.8) + "px)",
    });
  });
});
