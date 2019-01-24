$(document).ready(function() {
//This handles the decreasing of the counter. All characters including SPACE count.
  $(".tweet-box").on('keyup', function() { //
    let maxLen = 140;
    let tweetLen = $('.tweet-box').val().length;
    let totalLen = maxLen - tweetLen;
    let out = $(this).siblings('.counter');
    out.text(totalLen);

//This handles the color of the counter digits. When the number drops below ZERO it turns red.
    if(totalLen >= 0) {
      $(this).siblings('.counter').css("color", "black");
    } else $(this).siblings('.counter').css("color", "red");
  });
});


