

$('.triangle').click(function() {
  var id = $(this).attr('id'),
      inputQty = $('#quantity-' + id),
      linePrice = $('#linePrice-' + id),
      price = parseFloat($('#price-' + id).attr('value')),
      totalPrice = $('#totalPrice');
      min = inputQty.attr('min'),
      max = inputQty.attr('max');

  var oldValue = parseFloat(inputQty.val());

  if (oldValue >= max) {
    var newVal = oldValue;
  } else {
    var newVal = oldValue + 1;
  }

  var subTotal = price * newVal;

  linePrice.attr('value', subTotal.toFixed(2));
  inputQty.val(newVal);
  inputQty.trigger('change');
  linePrice.empty();
  linePrice.text('$ ' + subTotal.toFixed(2));

  var total = null;

  $('.line-price').each(function() {
    // var tagSubTotal = $('.line-price');
    total = total + parseFloat($(this).attr('value'));
    // console.log($(this).attr('value'));
  });

  totalPrice.empty();
  totalPrice.text('Total: $ ' + total.toFixed(2));
  // console.log(totalPrice);

});
