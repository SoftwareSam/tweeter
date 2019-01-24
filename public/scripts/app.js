/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.

const tweetData = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {

// var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like


  function renderTweets(tweets) {

    tweets.forEach(function(tweet){
      let appTweet = createTweetElement(tweet);
      $('#tweets-container').append(appTweet);
    });
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  function createTweetElement(tweet){

    let tweetElement = $('<article>').addClass('tweets');

    let tweetImg = $('<img>').attr("src", tweet.user.avatars.small);
    let tweetH3 = $('<h3>').text(tweet.user.name);
    let tweetH6 = $('<h6>').text(tweet.user.handle);
    let tweetHeader = $('<header>').append(tweetImg).append(tweetH3).append(tweetH6);

    let tweetDiv = $('<div>').text(tweet.content.text).addClass('tweet-display');

    let tweetH5 = $('<h5>').text(tweet.created_at);
    let tweetFoot = $('<footer>').append(tweetH5);


    tweetElement.append(tweetHeader)
                .append(tweetDiv)
                .append(tweetFoot);



    return tweetElement;
  }
  renderTweets(tweetData);

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


