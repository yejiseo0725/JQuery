$(function () {
  $(".list input[type=button]").click(function () {
    // 버튼
    const $this = $(this);
    // 부모 요소: list
    const $par = $this.parent().parent();
    // 수량
    const $obj = $par.find("input[type=text]");

    // 수량의 정보 text(숫자)
    let $value = $obj.val();

    // 버튼에 따라 수량 변경, 수량 텍스트 변경
    if ($this.val() === "-") {
      if ($value > 1) $obj.val(--$value);
    } else {
      if ($value < 10) $obj.val(++$value);
      // console.log($value);
    }

    // 상품의 금액 찾기
    let unitPrice = $par
      .find(".price")
      .text()
      .replace(/[^0-9]/g, "");

    // 수량 저장
    let quantity = $value;

    // list, 상품금액, 수량 보내기
    amountPrice_func($par, unitPrice, quantity);
  });

  $(".list:nth-child(1) input[type=button].down").trigger("click");
  // trigger: 강제로 클릭 이벤트 발생 & .up 혹은 .down 으로 조절 가능
  // amountPrice_func();

  function amountPrice_func(a, b, c) {
    // 위 함수에서 필요한 정보들을 모두 만들었으니,
    // 여기서는 계산만 해주면 됨.
    a.find(".am-price").text(parseInt(b) * parseInt(c));
    totalPay();
  }

  function totalPay() {
    let $list = $(".list");
    let converseUnit = 0;
    let amountTotal = 0;

    for (let i = 0; i < $list.length; i++) {
      // am-price : 합계
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

    // console.log(amountTotal); // 총 상품금액
    // console.log($calc); // 총 결제금액

    $total.find(".amPrice-sum").text(amountTotal.toLocaleString());
    $total.find(".totalPrice").text($calc.toLocaleString());
  }
});
