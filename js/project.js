
$(document).ready(function(){
  $("nav a").click(function(){
    $("nav a.current").removeClass("current");
    $(this).toggleClass("current");
  });    
  $("button").click(function(){
    var section=$(".current").data("ipsum");
    var number =$("#paragraphs").val();		
    $(".ipsum").hide(); 
    $("#"+section).find("p").slice(0,number).show();  
    $("#"+section).slideDown(500);
  });
    $("#paragraphs").focus(function(){
    $("#paragraphs").val("");
    $(".ipsum p").slideUp(500);
  });
});



