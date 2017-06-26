$("h1").mouseenter(function(){
	$("h1").animate({
		"font-size": "1400%",
	}, 1500, function(){
		$("h1").fadeOut(400, function(){
			$("h1").remove();
		});
	});
});

// $("h1").mouseenter(function(){
// 	$("h1").slideUp(1000, function(){
// 		$(this).remove();
// 	});
// });

$("body").on("click", function(evt){
	var dancingCow = $("<img/>");
	dancingCow.attr("src", "images/cow3.gif");
	dancingCow.css("left", evt.pageX);
	dancingCow.css("top", evt.pageY); //also these seem to be applying to fixed positions rather than whereever the mouse clicks
	$("body").append(dancingCow);
	dancingCow.animate({"right": "100%"}, 1000); //this doesn't seem to be working
});

$("#trees").on("click", function(evt){
	var roosterDance = $("<img/>");
	roosterDance.attr("src", "images/rooster2.gif");
	roosterDance.css("left", evt.pageX);
	roosterDance.css("bottom", evt.pageY);
	$("#trees").append(roosterDance);
});