// -------------------------
// Lazy "Cow On Click" Animation
// -------------------------

// $("body").on("click", function(evt){
//   var cow2 = $("<img/>");
//   cow2.attr("src", "images/cow2.gif");
//   cow2.css("left", evt.pageX);
//   cow2.css("top", evt.pageY);
//   $("body").append(cow2);
// });


// ---------------------------
// Ambitious (failed) attempt to make the sheep jump over the fence
// ---------------------------

$("body").on("click", function(evt){
	$("#sheep").animate({ left: "300px" }, 3000, "easeOutExpo");

	var jumpFence
	jumpFence = $("#sheep").animate({ up: "2px", left: "2px" }, 3000);

	var sheepLeave
	sheepLeave = $("#sheep").animate({ left: "2000px" }, 3000);

	var position
	position = $("#sheep").css("left", "400px");

	if ($("#sheep").css("left", "760px"))   
	sheepLeave

	else jumpFence
});


