// $(function () {
//   $(".quantity-box input[type=button]").click(function () {
//     const $this = $(this);
//     const $par = $this.parent().parent(); // li (.list)
//     const $obj = $par.find("input[type=text]");
//     let value = $obj.val(); // text area 의 값 === '초기' 수량 1

//     if ($this.val() === "-") {
//       // alert("마이너스");
//       if (value > 1) {
//         $obj.val(--value);
//       }
//     } else {
//       // alert("플러스");
//       if (value < 10) {
//         $obj.val(++value);
//       }
//     }

//       let itemUnit_price = $par.find(".price").text().replace(/[^0-9]/g, ""); // "," 빼줌
//       let itemPrice = parseInt(itemUnit_price); // str --> int 전환

//       let quantity = value; // text area 의 값 === '변경된' 수량

//       console.log(itemPrice * quantity);
//       payUnit_func($par, itemPrice, quantity);

//   });

//   function payUnit_func(selector, amount, quantity) {
//     selector.find(".am-price").text( (amount * quantity).toLocaleString() );
//     // toLocaleString(): 단위에 맞추어 알아서 ',' 를 넣어주는 기능
//   };
// });

$(function () {
  $(".list input[type=button]").click(function () {
    const $this = $(this);
    const $obj = $(this).siblings("input[type=text]");
    let $value = $obj.val();

    if ($this.val() === "-") {
      if ($value > 1) $obj.val(--$value);
    } else {
      if ($value < 10) $obj.val(++$value);
    }

    amountPrice_func();
    calc();
  });

  amountPrice_func();
  calc();

  function amountPrice_func() {
    const $list1 = $(".list1");
    const getPrice = $list1.find(".price").text(); // 금액 명시된 부분 찾기 (현재 string 인 상태)
    const itemPrice = parseInt(getPrice.replace(/[^0-9]/g, "")); // 그 금액을 int 로 변환
    const value = parseInt($list1.find("input[type=text]").val()); // 수량 부분도 찾아서 int 로 변환

    $list1.find(".am-price").text(itemPrice * value);
    // 합계 부분 찾아서 int 로 변환한 금액 x 수량

    // console.log(value);

    const $list2 = $(".list2");
    const getPrice2 = $list2.find(".price").text();
    const itemPrice2 = parseInt(getPrice2.replace(/[^0-9]/g, ""));
    const value2 = parseInt($list2.find("input[type=text]").val());

    $list2.find(".am-price").text(itemPrice2 * value2);

    // console.log(itemPrice2, value2);

    const $list3 = $(".list3");
    const getPrice3 = $list3.find(".price").text();
    const itemPrice3 = parseInt(getPrice3.replace(/[^0-9]/g, ""));
    const value3 = parseInt($list3.find("input[type=text]").val());

    // console.log(getPrice3, itemPrice3, value3);

    $list3.find(".am-price").text(itemPrice3 * value3);
  }
  // -----------

  function calc() {
    $where = $(".cartList");
    list1_find = $where.find(".list1");
    priceFind1 = parseInt(
      list1_find
        .find(".am-price")
        .text()
        .replace(/[^0-9]/g, "")
    ); // 상품 금액 1

    list2_find = $where.find(".list2");
    priceFind2 = parseInt(
      list2_find
        .find(".am-price")
        .text()
        .replace(/[^0-9]/g, "")
    ); // 상품 금액 2

    list3_find = $where.find(".list3");
    priceFind3 = parseInt(
      list3_find
        .find(".am-price")
        .text()
        .replace(/[^0-9]/g, "")
    ); // 상품 금액 3

    $here = $(".cartTotal-box .totalPrice-items");
    plusCalc = priceFind1 + priceFind2 + priceFind3;
    $here.find(".amPrice-sum").text(plusCalc);

    console.log(priceFind1, priceFind2, priceFind3);

    // 할인 금액 & 배송비 제외
    $whereM = $(".cartTotal-box .totalPrice-items");

    discount = parseInt(
      $whereM
        .find(".salePrice")
        .text()
        .replace(/[^0-9]/g, "")
    );
    delivery = parseInt(
      $whereM
        .find(".deliveryPrice")
        .text()
        .replace(/[^0-9]/g, "")
    );

    // console.log(discount, delivery);

    // 총 결제 금액
    totalPaymentPrice = plusCalc - discount + delivery;
    // console.log(totalPaymentPrice);

    $whereM.find(".totalPrice").text(totalPaymentPrice);
  }
});
