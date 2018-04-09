$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"spage6/s" + $(this).attr("id") + ".html");
	});
});