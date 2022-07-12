$(function () {

    let img_index = 0; // 전역변수

    $(".img").click(function () {
        let $index = $(this).index();
        img_index = $index;

        let $src = $(this).children().attr("src");
        $(".mainImage").children().attr("src", $src);

        $(this).css("border", "3px solid black");
        $(this).siblings().css("border", "none");

        checkIndex();
    });

    $("#img0").trigger("click");

    $(".arrow-down").click(function () {
        if (img_index < 5) {
            img_index++;
        }

        checkIndex();

        let $src = $(".img").eq(img_index).children().attr("src");
        $(".mainImage").children().attr("src", $src);

        $(".img").css("border", "none");
        $("#img" + img_index).css("border", "5px solid coral");
        // console.log(img_index);

    });

    $(".arrow-up").click(function () {

        if (img_index > 0) {
            img_index--;

            console.log(img_index);
        }

        checkIndex();

        let $src = $(".img").eq(img_index).children().attr("src");
        $(".mainImage").children().attr("src", $src);

        $(".img").css("border", "none");
        $("#img" + img_index).css("border", "5px solid coral");
        // console.log(img_index);
    });


    function checkIndex() {

        if (img_index <= 0) {
            $(".arrow-up").prop("disabled", true);
            $(".arrow-up").css("cursor", "not-allowed");
        } else {
            $(".arrow-up").prop("disabled", false);
            $(".arrow-up").css("cursor", "pointer");
        }

        if (img_index >= 5) {
            $(".arrow-down").prop("disabled", true);
            $(".arrow-down").css("cursor", "not-allowed");
        } else {
            $(".arrow-down").prop("disabled", false);
            $(".arrow-down").css("cursor", "pointer");
        }

    };




    // if (img_index >= 5) {
    //     $(".arrow-down").children().css("color", "#808080");
    // } else {
    //     $(".arrow-down").children().css("color", "black");
    // }
    // if (img_index <= 0) {
    //     $(".arrow-up").children().css("color", "#808080");
    // } else {
    //     $(".arrow-up").children().css("color", "black");
    // }



});