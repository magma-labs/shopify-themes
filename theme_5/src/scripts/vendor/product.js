var inputQty = $('#Quantity'),
    min = inputQty.attr('min'),
    max = inputQty.attr('max');
    
$('#triangleBtnProduct').click(function() {
  var oldValue = parseFloat(inputQty.val());

  if (oldValue >= max) {
    var newVal = oldValue;
  } else {
    var newVal = oldValue + 1;
  }

  inputQty.val(newVal);
  inputQty.trigger('change');
});

inputQty.change(function(){
  console.log('changing');
});
