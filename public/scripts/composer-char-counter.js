$(document).ready(function() {

  $(".tweet-box").on('keyup', function() {
    let maxLen = 140;
    let tweetLen = $('.tweet-box').val().length;
    let totalLen = maxLen - tweetLen;
    let out = $(this).siblings('.counter');
    out.text(totalLen);


  if(totalLen >= 0){
    $(this).siblings('.counter').css("color", "black");
  }
  else $(this).siblings('.counter').css("color", "red");
  });

});


