$("body").on("click", function(evt){
  var man = $("<imgages/>");
  man.attr("src", "imgages/man.gif");
  man.css("left", evt.pageX);
  man.css("top", evt.pageY);
  $("body").append(man);
  man.animate({ "left": "100%" }, 3000);
  });


$("#cow3").delay(1000).animate({ left: "1000px" }, 3000, "easeOutExpo");