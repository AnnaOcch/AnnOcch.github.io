// $(document).ready(function(){


// $("#panel1").css({
// 	color: "red",
// 	fontWeight: "bold"
// });

// $("#panel2").css({opacity: "0.5"});

//$("#btn1").html("my panel <strong> my bold </strong>");

$("#btn1").on("click", function(){
	$("#panel1 .panel-body").html("my new content will be here");
});
$("#btn2").on("click", function(){
	$("#panel2").toggle(10);
});
$("#btn3").on("mouseover", function(){
	$("#panel3").toggle(1000);
});
$("#btn4").on("mouseover", function(){
	$("#panel4").toggle(10);
});



//});
