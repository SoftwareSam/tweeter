/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {

  function loadTweets() {
    $.get('http://localhost:8080/tweets')
    .then(function (tweets) {
      console.log('Success: ', tweets);
      renderTweets(tweets);
    });
  }

  // function postTweets(){
  //   event.preventDefault();
  //   $.post('http://localhost:8080/tweets', {
  //   message: 'howdy do'
  //   })
  // }


  $('#tweetForm').submit(function(event){
    event.preventDefault();
    let output = $( this ).serialize();
    let tweetLen = $('.tweet-box').val().length;
    // console.log(output);
    if(tweetLen > 140 || tweetLen === 0)  {
      return alert("Character error");
    }
    $.post('http://localhost:8080/tweets', output)
     .then(function(){
      $('#tweets-container').empty();
      loadTweets();
    });
  });


  function renderTweets(tweets) {
    tweets.forEach(function(tweet){             // loops through tweets
      let appTweet = createTweetElement(tweet); // calls createTweetElement for each tweet
      $('#tweets-container').append(appTweet);  // takes return value and appends it to the tweets container
    });

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

  loadTweets();
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


