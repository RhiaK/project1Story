$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"spage4/s" + $(this).attr("id") + ".html");
	});
});