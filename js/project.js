$(document).ready(function(){
	$("button").click(function(){
		var div=$("div");
		div.animate({left:'100px'}, "slow");
		div.animate({fontSize:'80px'}, "slow");
		$(this).remove();
	});
});

// function handleClick() {
// 	$(this).animate({"left": "100%"}, 2000, function(){
// 		$(this).addClass("cow3");
// 	});
// }

// $("cow3").on("click", handleClick);

$("#cow3").click(function(event) {
	event.preventDefalut();
	$(".cow3").animate({
		right: "300px"
	});
}