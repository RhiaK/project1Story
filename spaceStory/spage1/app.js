$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"spage2/s" + $(this).attr("id") + ".html");
	});
});

