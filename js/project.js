$(document).ready(function (){
// cow jumps over the sun
	$("#cow").animate({ 
		top: "300px",
	}, 1000);
// trying to make the eggs fade in next to chick
	$("#eggs").fadeIn(2000);
}); 

// why is the lamb only showing up in the grass?

$("body").on("click", function(evt){
  var lamb = $("<img/>");
  lamb.attr("src", "images/lamb.gif");
  lamb.css("left", evt.pageX);
  lamb.css("top", evt.pageY);
  $("body").append(lamb);
  // lamb.animate({ "left": "100%" }, 3000);
});




