 $(function() {
   var quotes = [{
     quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armor yourself in it, and it will never be used to hurt you.",
     author: "Tyrion Lannister"
   }, {
     quote: "Love is poison. A sweet poison, yes, but it will kill you all the same.",
     author: "Cersei Lannister"
   }, {
     quote: "海明威在《钟为谁鸣》里说过这个意思：所有的人是一个整体，别人的不幸就是你的不幸。所以，不要以为丧钟是为谁而鸣——它就是为你而鸣。但这个想法我觉得陌生，我就盼着别人倒霉。五十多年前，有个德国的新教牧师说：起初，他们抓共产党员，我不说话，因为我不是工会会员；后来，他们抓犹太人，我不说话，因为我是亚利安人；后来他们抓天主教徒，我不说话，因为我是新教徒……最后他们来抓我，已经没人能为我说话了。众所周知，这里不是纳粹德国，我也不是新教牧师。所以，这些话我也不想记住。",
     author: "鲁迅"
   }, {
     quote: "中国的孩子，只要生，不管他好不好，只要多，不管他才不才，生他们的人，不负教他的责任。虽然“人口众多”这一句话，很可以闭了眼睛自负，然而这许多人口，便只在尘土中辗转，小的时候，不把他当人，大了以后也做不了人。",
     author: "鲁迅"
   }, {
     quote: "我们每个人在这个世界上都是独立的，每个人都被束缚在一座铁塔里，只能通过一些符号向别人倾诉自己的想法，而这些符号并没有统一的意义，所以它们的意义是含糊不清的。我们非常痛苦地想要让别人接受我们心中的财富，可是他们却不具备这种能力。所以我们只能独立行走，虽然身体互相依靠可是却不在一起，我们不了解别人，别人也不了解我们。我们就像住在异国他乡的人，对于这个国家的语言，我们所知甚少，尽管我们有很多奇妙的、深刻的事情想说，可是却只能用一些司空见惯的话来表达。我们的脑子里充斥着各种想法，而我们可以说的就只有像“园丁的姑母遗忘了一把伞在屋子里”这样的话",
     author: "Unknown",
     unknown: true
   }, {
     quote: "人们容易原谅别人的的错误,却很难原谅别人的正确。",
     author: "Unknown",
     unknown: true
   }, {
     quote: "原始的自由主义在道德上主张这个世界上有很多种不同的生活方式，有很多种不同理想的人生境界。可能你信仰某个宗教，根据这个宗教的指引上到天堂，这便是你最理想的人生境界。但对我而言，每天酒池肉林就是我人生的理想境界。自由主义的精髓在于你没有权利把你的那一套理想的人生境界强加到我身上，我也不能强迫你跟我过酒池肉林的生活，因为没有任何人掌握真理，没有任何人有把握确定世界上哪一种理想的人生境界是完美的，是绝对真实的。",
     author: "Unknown",
     unknown: true
   }, {
     quote: "近来很通行说青年；开口青年，闭口也是青年。但青年又何能一概而论？有醒着的，有睡着的，有昏着的，有躺着的，有玩着的，此外还多。但是，自然也有要前进的。要前进的青年们大抵想寻求一个导师。然而我敢说：他们将永远寻不到。寻不到倒是运气；自知的谢不敏，自许的果真识路么？凡自以为识路者，总过了“而立”之年，灰色可掬了，老态可掬了，圆稳而已，自己却误以为识路。假如真识路，自己就早进向他的目标，何至于还在做导师。说佛法的和尚，卖仙药的道士，将来都与白骨是“一丘之貉”，人们现在却向他听生西的大法，求上升的真传，岂不可笑！",
     author: "鲁迅"
   }, {
     quote: "我们每一缕的思想只代表我们生命中的一个时期。倘若活着不是为了纠正我们的错误，克服我们的偏见，扩大我们的思想和心胸，那么活着有什么用？所以不要着急对别人的所作所为所思所想下定论，每个人都在和什么做着斗争，那些“常胜不败”的人不过是活的安于自身限度，从未投入过生活的战斗。",
     author: "Unknown",
     unknown: true
   }, {
     quote: "关于你的诸般际遇，那是你的人生，经历之后都是财富。我只是个一直在演戏的演员，人生太过复杂，我也不是万事明了，能送给你的只有四个字：好好感受。",
     author: "Unknown",
     unknown: true
   }, {
     quote: "人应该为自己的浅薄和过于功利感到羞愧的。",
     author: "Unknown",
     unknown: true
   }, {
     quote: "人不需要活太多样子。你认真做一件事情，会解释所有的事。",
     author: "Unknown",
     unknown: true
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