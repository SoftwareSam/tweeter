$(document).ready(function() {

  $("#tweet-box").on('keyup', function() {
    let maxLen = 10;
    let tweetLen = $('#tweet-box').val().length;
    let totalLen = maxLen - tweetLen;
    let out = $(this).siblings('.counter');
    out.text(totalLen);
  });

  var charLimit = parseInt($('#counter').text());
    var color = 'black';
      if (charLimit >= 0) {
        color = 'black';
      }
      else if (charLimit < 0) {
        color = 'red';
      }
      $('#counter').css('color', color);
  });


