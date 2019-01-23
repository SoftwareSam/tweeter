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

$(document).ready(function() {

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

  function createTweetElement(){
    let tweetElement = $('<article>').text(tweetData.user.name);




    return tweetElement;
  }



});





































































  // function renderTweets(tweets) {
  // // loops through tweets
  // tweetData.forEach(function(createTweetElement)  {
  //   let data = tweetData;
  // });
  //   // calls createTweetElement for each tweet

  //   // takes return value and appends it to the tweets container
  // }

 // function createTweetElement(tweet){

 //  let img = $("<img>").attr("src", tweet.user.avatars.small);
 //  let h3 = $("<h3>").text(tweet.user.name);
 //  let h6 = $("<h6>").text(tweet.user.handle);
 //  let header = $("<header>").append(img).append(h3).append(h6);

 //  let div = $("<div>").text(tweet.content.text);
 //  let h5 = $("<h5>").text(tweet.created_at); //footer

 //  let main = $("<main>").append(header).append(div).append(h5);

 // }


