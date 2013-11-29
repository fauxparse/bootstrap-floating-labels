$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
  $(".floating-label-form-group").each(function(e){
	  $(this).toggleClass("floating-label-form-group-with-value", !!$(this).find('input, textarea').val());
  });
});
