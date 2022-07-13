$(function () {

    // 선택자
    // 1. 기본 선택자
    // $(".logo").css("border", "4px solid blue");
    // $("#gnb").css("border", "4px solid crimson");
    // // $("p").css("border", "4px solid orange");

    // $("#gnb > ul > li").css("border", "4px solid black");
    // $(".visual + #content").css("border", "4px solid pink");
    // $(".visual ~ .banner").css("border", "4px solid crimson");

    // $(".left, .right, util").css("border", "4px solid green");


    // 2. 필터 선택자
    // $(".box").css("margin", "10px");
    // $(".box:odd").css("border", "4px solid black");
    // $(".box:even").css("border", "4px solid royalblue");

    // $("p:first").css("background-color", "coral");
    // $("p:last").css("background-color", "dodgerblue");

    // $("section").css("margin", "10px");
    // // $("section:eq(1)").css("border", "4px solid blue");
    // $("section:lt(2)").css("border", "4px solid blue");

    // $("li").css("margin", "10px");
    // $("li:not(.a2)").css("border", "4px solid coral");

    // 3. 탐색 선택자
    // $("#m1").children("span").css("border", "2px solid crimson");
    // $("#m2").children().children().css("border", "2px solid orange");

    // $('.m2_child').closest("div").css("border", "2px solid red");

    // $("#m4 em").prev().css("border", "2px solid violet");
    // $("#m4 em").prevAll().css("border", "2px solid violet");

    // $("#m4 .m").next().css("border", "2px solid gold");
    // $("#m4 .m").nextAll().css("border", "2px solid gold");

    // $("#m5 span").filter(".m").css("border", "2px solid dodgerblue");
    // $("#m5").children().eq(0).css("border", "2px solid red");
    // $("#m6").find("a").css("border", "2px solid pink");

    console.log($(".box").children().is("article")); // --> true 

    // if ($(".box").children().is("article")) {
    //     alert("아티클 맞아");
    // } else {
    //     alert("아티클 아니야");
    // }

});