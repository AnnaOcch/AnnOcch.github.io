jQuery("#credits").on("click", function() {
    var message = "Game created by Bob!";
    jQuery("#credits").append(
       "<p>" + message + "</p>"
   );
});

jQuery("#creditsbtn").on("click", function() {
    var message = "Game created by Bob!";
    jQuery("#content").append(
       "<p>" + message + "</p>"
   );
});







jQuery("#scoresbtn").on("click", function(){
	jQuery("#imageD").toggle(10);
});
