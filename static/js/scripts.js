jQuery(".floatlabel input").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-shift');
});
jQuery(".floatlabel input").blur(function() {
   if($(this).val().length == 0) {
    var elementId = $(this).attr('id');
     jQuery("label[for=" + elementId + "]").removeClass('floatlabel-shift');
   }
});
jQuery(".floatlabel input").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-active');
});
jQuery(".floatlabel input").blur(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").removeClass('floatlabel-active');
});



jQuery(".floatlabel textarea").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-shift');
});
jQuery(".floatlabel textarea").blur(function() {
   if($(this).val().length == 0) {
    var elementId = $(this).attr('id');
     jQuery("label[for=" + elementId + "]").removeClass('floatlabel-shift');
   }
});
jQuery(".floatlabel textarea").focus(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").addClass('floatlabel-active');
});
jQuery(".floatlabel textarea").blur(function() {
  var elementId = $(this).attr('id');
   jQuery("label[for=" + elementId + "]").removeClass('floatlabel-active');
});
