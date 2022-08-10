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
    const $par = $this.parent().parent(); // .list
    const $obj = $par.find("input[type=text]");

    let $value = $obj.val();

    // 버튼에 따라 수량 변경, 수량 텍스트 변경
    if ($this.val() === "-") {
      if ($value > 1) $obj.val(--$value);
    } else {
      if ($value < 10) $obj.val(++$value);
    }

    let unitPrice = $par
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");
    let quantity = $value;

    amountPrice_func($par, unitPrice, quantity);
  });

  $(".list:nth-child(1) input[type=button].down").trigger("click");
  // trigger: 강제로 클릭 이벤트 발생 & .up 혹은 .down 으로 조절 가능

  amountPrice_func();

  function amountPrice_func(a, b, c) {
    let unitTotalAmount;

    a.find(".am-price").text(parseInt(b) * parseInt(c));
    totalPay();
  }

  function totalPay() {
    let $list = $(".list");
    let converseUnit = 0;
    let amountTotal = 0;

    for (let i = 0; i < $list.length; i++) {
      converseUnit = $list
        .eq(i)
        .find(".am-price")
        .text()
        .replace(/[^0-9]/g, "");
      amountTotal += parseInt(converseUnit);
    }

    const $total = $(".totalPrice-items");
    const $discount = parseInt(
      $total
        .find(".salePrice")
        .text()
        .replace(/[^0-9]/g, "")
    );
    const $delivery = parseInt(
      $total
        .find(".deliveryPrice")
        .text()
        .replace(/[^0-9]/g, "")
    );
    const $calc = amountTotal - $discount + $delivery;

    console.log(amountTotal); // 총 상품금액
    console.log($calc); // 총 결제금액

    $total.find(".amPrice-sum").text(amountTotal.toLocaleString());
    $total.find(".totalPrice").text($calc.toLocaleString());
  }
});
