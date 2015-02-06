$(document).ready(function() {
   $(".product").draggable({
      'opacity': 0.3,
      'revert': "valid",
      'delay': 200,
      'distance':4,
      'helper':"clone"
   });
   
   $("#cart").droppable({
      'accept':".product",
      'activeClass':"border",
      'drop': function(e,ui){
         $("#numItems").text(new Number($("#numItems").text())+1);
         var ID = $(ui.draggable).attr("id");
         var price = new Number($("#"+ID + " .price").text());
         $("#totalPrice").text(new Number($("#totalPrice").text())+price);
      }
   });

});
