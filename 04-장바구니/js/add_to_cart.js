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

    // 버튼에 따라 수량 변경, 수량 텍스트 변경
    if ($this.val() === "-") {
      if ($value > 1) $obj.val(--$value);
    } else {
      if ($value < 10) $obj.val(++$value);
    }

    amountPrice_func();
  });

  amountPrice_func();

  function amountPrice_func() {
    const $list1 = $(".list1");
    const $price1 = $list1
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");
    // replace(/[^0-9]/g, "") -> 숫자만 추출
    const $value1 = $list1.find("input[type=text]").val();
    const $am1 = parseInt($price1) * parseInt($value1);
    $list1.find(".am-price").text($am1.toLocaleString()); // 1번 장바구니의 합계
    // toLocaleString() -> 숫자를 쉼표로 분리해줌

    const $list2 = $(".list2");
    const $price2 = $list2
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");
    const $value2 = $list2.find("input[type=text]").val();
    const $am2 = parseInt($price2) * parseInt($value2);
    $list2.find(".am-price").text($am2.toLocaleString()); // 2번 장바구니의 합계

    const $list3 = $(".list3");
    const $price3 = $list3
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");
    const $value3 = $list3.find("input[type=text]").val();
    const $am3 = parseInt($price3) * parseInt($value3);
    $list3.find(".am-price").text($am3.toLocaleString());

    console.log($am1 + $am2 + $am3);

    totalPay($am1, $am2, $am3);
  }

  function totalPay(a, b, c) {
    const $am_sum = a + b + c;

    const $total = $(".totalPrice-items");
    const $sale = $total
      .find(".salePrice")
      .text()
      .replace(/[^0-9]/g, "");
    const $delivery = $total
      .find(".deliveryPrice")
      .text()
      .replace(/[^0-9]/g, "");

    // 총 상품금액 - 할인 금액 + 배송비 ==> 총 결제금액(.totalprice)
    const $calc = $am_sum - parseInt($sale) + parseInt($delivery);

    $total.find(".amPrice-sum").text($am_sum.toLocaleString());
    $total.find(".totalPrice").text($calc.toLocaleString());
  }
  // -----------

  // function calc() {
  //   $where = $(".cartList");
  //   list1_find = $where.find(".list1");
  //   priceFind1 = parseInt(
  //     list1_find
  //       .find(".am-price")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   ); // 상품 금액 1

  //   list2_find = $where.find(".list2");
  //   priceFind2 = parseInt(
  //     list2_find
  //       .find(".am-price")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   ); // 상품 금액 2

  //   list3_find = $where.find(".list3");
  //   priceFind3 = parseInt(
  //     list3_find
  //       .find(".am-price")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   ); // 상품 금액 3

  //   $here = $(".cartTotal-box .totalPrice-items");
  //   plusCalc = priceFind1 + priceFind2 + priceFind3;
  //   $here.find(".amPrice-sum").text(plusCalc);

  //   console.log(priceFind1, priceFind2, priceFind3);

  //   // 할인 금액 & 배송비 제외
  //   $whereM = $(".cartTotal-box .totalPrice-items");

  //   discount = parseInt(
  //     $whereM
  //       .find(".salePrice")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   );
  //   delivery = parseInt(
  //     $whereM
  //       .find(".deliveryPrice")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   );

  //   // console.log(discount, delivery);

  //   // 총 결제 금액
  //   totalPaymentPrice = plusCalc - discount + delivery;
  //   // console.log(totalPaymentPrice);

  //   $whereM.find(".totalPrice").text(totalPaymentPrice);
  // }

  // 잠깐
  // function totalPay() {
  //   const list1_amPrice = parseInt($(".list1 .am-price").text());
  //   const list2_amPrice = parseInt($(".list2 .am-price").text());
  //   const list3_amPrice = parseInt($(".list3 .am-price").text());

  //   const $total = $(".totalPrice-items");
  //   const $sum = list1_amPrice + list2_amPrice + list3_amPrice;
  //   const $sale = parseInt(
  //     $total
  //       .find(".salePrice")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   );
  //   const $delivery = parseInt(
  //     $total
  //       .find(".deliveryPrice")
  //       .text()
  //       .replace(/[^0-9]/g, "")
  //   );

  //   $total.find(".amPrice-sum").text($sum);
  //   $total.find(".totalPrice").text($sum - $sale + $delivery);
  // }
});
