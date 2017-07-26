
  var inputQty = $('#Quantity'),
      min = inputQty.attr('min'),
      max = inputQty.attr('max');

  $('.triangle').click(function() {
    var oldValue = parseFloat(inputQty.val());
    console.log(oldValue);

    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }

    inputQty.val(newVal);
    inputQty.trigger('change');
  });
