
$(document).ready(function(){

  var randomQuote, randomNum, author1, a=0;
	function getQuote(){
		 var quotes=["Be optimistic", "Never give up", "Act of not panicking"];
		 var authors=["gopal", "jay", "utsav"];
		 var colors=["olive","lime", "teal"];
		 randomNum=Math.floor((Math.random()*quotes.length));
		 randomQuote=quotes[randomNum];
		 author1=authors[randomNum];

		 $(".quote").text(randomQuote);
		 $(".author").text(author1);
		 (a == colors.length) && (a = 0);
		 $("body").css("background", colors[a]);
		 a++;
		 
		
	}

	$("#newquote").on("click",function(){
		getQuote();
		

	});
});