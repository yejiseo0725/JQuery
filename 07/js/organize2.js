$(function () {

    // let a = "Hello World";
    // console.log( $(".box").text() );

    // $(".box").text(a);
    // console.log( $(".box").text() );

    $(".box").html("<strong>Hello World!!!</strong>");
    // html 과 text 의 차이는, html 은 태그 전체를 바꿔주는 것이 가능하다.

    $(".box").prepend("<strong>여러분</strong>");
    $(".box").append("<em>1234</em>");


    $(".add").click(function () {
        $(".box").addClass("plus");
    });

    $(".remove").click(function () {
        $(".box").removeClass("plus");
    });

    $(".toggle").click(function () {
        $(".box").toggleClass("plus");
        // toggle 은 초깃값이 remove 인 상태에서도 가능하다. 
    });

    $(".box").click(function () {
        console.log($(".box").hasClass("plus"));
    });






})