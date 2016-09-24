$(document).ready(function(){
  $('.next').click(function(){
    $('.left').removeClass('disabled');
    $('.right').addClass('disabled');
    $('.question-box1').addClass('hide');
    $('.question-box2').removeClass('hide');
  });
  $('.left').click(function(){
    $('.question-box2').addClass('hide');
    $('.question-box1').removeClass('hide');
    $('.left').addClass('disabled');
  });

  $('.assessment-button').click(function(){
    $('.form').removeClass('hide');
    $('.assessment-button').addClass('hide');
    $('.profile').addClass('hide');
  });
  $('.submit').click(function(){
    $('.form').addClass('hide');
    $('.assessment-button').removeClass('hide');
    $('.profile').removeClass('hide');
  });
});

