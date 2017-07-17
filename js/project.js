$("body").on("click", function(evt){
	var pig = $("<img/>");
	pig.attr("src", "images/pig2.gif");
	pig.css("left", evt.pageX);
	pig.css("top", evt.pageY);
	$("body").append(pig);
	var showAnimals = $("#animals").delay(1000);
	$(showAnimals).show(300);
	$("#animate3").delay(4000).animate({"top":"500px"}, 500, "easein");
});


$("#sun").animate({"width":"250px", "top":"20px", "right":"50%"}, 3000).fadeIn(1000);

$("#animate4").delay(4000).animate({"bottom":"240px", "right": "50%"}, 500 );

$("#animate1").delay(5000).animate({"left":"100%"}, 2000 );



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


// $("body").mouseenter(function() {
//   $("h1").fadeOut(500);
// });

// $("body").on("click", function(evt) {
// 	var chicken = $("<img/>");
// 	chicken.attr("src", "img/chicken.gif");
// 	chicken.css("left", evt.pageX);
// 	chicken.css("top", evt.pageY);
// 	$("body").append(chicken);
// 	chicken.animate({left: "100%"}, 2000);

// 	var cow = $("<img/>");
// 	cow.attr("src", "img/cow.png");
// 	cow.css("left", "-100px");
// 	cow.css("top", 0);
// 	$("body").append(cow);
// 	cow.delay(2000).animate({"top": "50%", "left": "50%"}, 2000);
// });

// $("#cow2").animate({ left: "1000px" }, 3000, "easeOutElastic");
// $("#horse").delay(3000).animate({ left: "1000px" }, 3000, "easeOutExpo");
// $("#lamb").delay(6000).animate({ left: "1000px" }, 3000, "easeOutBack");
// $("#pig").delay(9000).animate({ left: "1000px" }, 3000, "easeOutBounce");