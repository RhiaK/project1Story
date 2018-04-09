$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"spage3/s" + $(this).attr("id") + ".html");
	});
});
