$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"spage5/s" + $(this).attr("id") + ".html");
	});
});