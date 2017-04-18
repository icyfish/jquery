 $(function() {
   var quotes = [{
     quote: "Only the paranoid survive.",
     author: " Andy Grove"
   }, {
     quote: "Love is poison. A sweet poison, yes, but it will kill you all the same.",
     author: "Cersei Lannister"
   }, {
     quote: "If you change nothing, nothing will change",
     author: "Tony Robbins"
   }, {
     quote: "There ain't no devil, only God when he's drunk.",
     author: "Tom Waits"
   }, {
     quote: "I like beautiful melodies telling me terrible things.",
     author: "Tom Waits" 
   }, {
     quote: "My best friend is the one who brings out the best in me.",
     author: "Henry Ford"
   }, {
     quote: "The world is a hellish place, and bad writing is destroying the quality of our suffering.",
     author: "Tom Waits" 
   }, {
     quote: "Only I can change my life. No one can do it for me.",
     author: "Carol Burnett" 
   }, {
     quote: "Life is 10% what happens to you and 90% how you react to it.",
     author: "Charles R. Swindoll"
   }];

   var currentIdx, currentQuote;

   function getQuote() {
     do {
       var idx = Math.floor(Math.random() * quotes.length);
     } while (currentIdx === idx);
     currentIdx = idx;
     currentQuote = quotes[currentIdx];

     $('.quote-text').html(currentQuote.quote);
     $('.quote-author').html(currentQuote.author);
   }

   function tweetOut() {
     var quoteToTweet = currentQuote.quote;

     if (quoteToTweet.length > 120) {
       quoteToTweet = quoteToTweet.substr(0, 120).match(/^.+[.]/)[0];
     }
     quoteToTweet = encodeURIComponent('"' + quoteToTweet + '"');
     window.open('https://twitter.com/intent/tweet?text=' + quoteToTweet);

   }

   getQuote();
   $('.new-quote').on('click', getQuote);
   $('.fa-twitter').on('click', tweetOut);

 });