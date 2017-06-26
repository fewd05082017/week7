$(document).ready(function(){

    $(this).click(function(){
        $("#tree").animate({right: "10%"}, 1000);
        $("#pig").animate({right: "15%"}, 1000, function(){
        	$("#pig").delay(500).hide("#pig");
        });
        $("#pig").css("left","10%")

    });









  });