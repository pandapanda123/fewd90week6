
$(document).ready(function(){
  $("nav a").click(function(){
    $("nav a.current").removeClass("current");
    $(this).toggleClass("current");
  });
  $("button").click(function(){
    var section=$(".current").data("ipsum");
    var number =$("#paragraphs").val();
    $("#"+section).find("p").slice(0,number).show();
    $("#"+section).slideDown(500);
  });
  $("#paragraphs").focus(function(){
    $("#paragraphs").val("");
    $(".ipsum").slideUp(500, function() {
        $(this).find('p').hide();
    });
  });
});
