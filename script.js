$(function(){
  var height=(".header").height();
  $("body").css("margin-top",height + 140)

 $('.contents-item').click(function(){
  var $answer = $(this).find('.answer');
  if ($answer.hasClass('open')){
     $answer.removeClass('open');
     $answer.slideUp();

   } else{
     $answer.addClass('open');
     $answer.slideDown();
   }
$(".header-logo-text").click(function(){
 $('html,body').animate({
   'scroolTop':0
 });

$('.header-list').click(function(){
var id = $(this).attr('href');
var posittion =$(id).offset().top;
  $('html,body').animate({

scroolTop:position
},500);
});

$('.footer-contents').click(function(){
var $down = $(this).find('.down')
 if ($down.hasClass('reveal')){
   $down.removeClass('reveal');
   $down.slideUp();
 } else {
   $down.addClass('reveal');
   $down.slideDown();
  }

});

$('footer-go-top').click(function(){
'scrollTop':0
});

});
