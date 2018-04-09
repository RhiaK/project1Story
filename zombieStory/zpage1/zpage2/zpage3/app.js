$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"zpage4/z" + $(this).attr("id") + ".html");
	});
});