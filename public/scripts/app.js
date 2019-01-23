/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.



const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);


 function createTweetElement(tweet){

  let img = $("<img>").attr("src", tweet.user.avatars.small);
  console.log(img);

  let h3 = $("<h3>").text(tweet.user.name);
  console.log(h3);

  let h6 = $("<h6>").text(tweet.user.handle);
  console.log(h6);

  let header = $("<header>").append(img).append(h3).append(h6);
  console.log(header);

  let div = $("<div>").text(tweet.content.text);
  console.log(div);

  let h5 = $("<h5>").text(tweet.created_at);
  console.log(h5);

  return tweet;

 }


