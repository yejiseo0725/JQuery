$(function () {

    // let a = "Hello World";
    // console.log( $(".box").text() );

    // $(".box").text(a);
    // console.log( $(".box").text() );

    // $(".box").html("<strong>Hello World!!!</strong>");
    // // html 과 text 의 차이는, html 은 태그 전체를 바꿔주는 것이 가능하다.

    // $(".box").prepend("<strong>여러분</strong>");
    // $(".box").append("<em>1234</em>");


    // $(".add").click(function () {
    //     $(".box").addClass("plus");
    // });

    // $(".remove").click(function () {
    //     $(".box").removeClass("plus");
    // });

    // $(".toggle").click(function () {
    //     $(".box").toggleClass("plus");
    //     // toggle 은 초깃값이 remove 인 상태에서도 가능하다. 
    // });

    // $(".box").click(function () {
    //     console.log($(".box").hasClass("plus"));
    // });


    // 

    // let a = "4px solid coral";
    // let h = "200px";
    // let c = "orange";

    // // $(".box1").css("border", "4px solid black");

    // $(".box2").css({
    //     border: a, 
    //     height: h, 
    //     background: c});
    // 한 번에 여러개 적용 --> {} 중괄호 사용

    $(".box1, .box2, .box3").css({
        border: "4px solid black",
        margin: "10px",
    });

    let box1 = $(".box1").attr("id");
    console.log(box1);
    let box2 = $(".box2").data("text");
    console.log(box2);
    let link = $("a").attr("href");
    console.log(link);

    $("a").attr("target", "_self").attr("class", "abc");


});