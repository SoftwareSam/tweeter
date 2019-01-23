$(document).ready(function() {

  $("#tweet-box").on('keyup', function() {
    let maxLen = 10;
    let tweetLen = $('#tweet-box').val().length;
    let totalLen = maxLen - tweetLen;
    let out = $(this).siblings('.counter');
    out.text(totalLen);


  if(totalLen >= 0){
    $('.counter').css("color", "black");
  }
  else $('.counter').css("color", "red");
  });

});


