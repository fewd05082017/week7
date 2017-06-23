$("body").mouseenter(function() {
  $("h1").fadeOut(2000);
});

$("button").on("click", function(evt){
  var cow = $("<img/>");
  cow.attr("src", "images/cow3.gif");
  cow.css("left", "100px");
  cow.css("bottom", "50px");
  $("body").append(cow);
  cow.delay(1000).animate({ "bottom": "100%", "left": "100%" }, 3000);

  var pig = $("<img/>");
  pig.attr("src", "images/pig.gif");
  pig.css("left", "100px");
  pig.css("top", "150px");
  $("body").append(pig);
  pig.delay(2000).animate({ "top": "100%", "left": "100%" }, 3000);

  var rooster = $("<img/>");
  rooster.attr("src", "images/rooster2.gif");
  rooster.css("right", "100px");
  rooster.css("top", "150px");
  $("body").append(rooster);
  rooster.delay(3000).animate({ "top": "100%", "right": "100%" }, 3000);

  var man = $("<img/>");
  man.attr("src", "images/man.gif");
  man.css("right", "100px");
  man.css("bottom", "50px");
  $("body").append(man);
  man.delay(4000).animate({ "bottom": "100%", "right": "100%" }, 3000);

  var button = $("#party");
  button.fadeOut(100).delay(6000).fadeIn(500);
});

