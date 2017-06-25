$("body").on("click", function(evt){
	var person = $("<img/>");
	person.attr("src", "images/man.gif");
	person.css("left", evt.pageX);
	person.css("top", evt.pageY);
	$("body").append(person);
	//how can I show this guy only once?
	var showAnimals = $("#animals").delay(1000);
	$(showAnimals).show(300);
	$("#ani3").delay(4000).animate({"top":"500px"}, 500, "easein");
});


$("#sun").animate({"width":"250px", "top":"20px", "left":"1%"}, 3000).fadeIn(1000);
//how do I animate and fadIn at the same time?

$("#ani4").delay(4000).animate({"bottom":"240px"}, 500 );
// $("#ani4").delay(5000).animate({"bottom":"240px"}, 5000,"easeOutBack");
// Why adding easout doesn't work?


$("#ani1").delay(5000).animate({"left":"100%"}, 2000 );



 // $("#submit").on("click", function() {
 //    var selector = "#" + $("nav a.current").data("ipsum");
 //    var numParagraphs = $("#paragraphs").val();
 //    $(".ipsum").hide();
 //    $(selector)
 //      .find("p")
 //      .slice(0, numParagraphs)
 //      .show();
 //    $(selector).slideDown(400);
 //  });

