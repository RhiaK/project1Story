//page5 to 6
$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"zpage6/z" + $(this).attr("id") + ".html");
	});
});
