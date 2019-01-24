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

        // <article class="tweets">
        //   <header>
        //     <img class="logo" src="/images/bird.png">
        //     <h3>Head</h3>
        //     <h6>@MrHead</h6>
        //   </header>

        //   <div class="tweet-display"> THE TWEET </div>

        //   <footer>
        //     <h5>10 days ago</h5>
        //   </footer>
        // </article>

  function createTweetElement(tweet){
    //this creates an article tag, puts the contents of tweetData>User>Name inside it, and then assigns that whole thing to a variable.
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


    // let main = $('<main>').append(tweetElement).append(tweetName);
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


