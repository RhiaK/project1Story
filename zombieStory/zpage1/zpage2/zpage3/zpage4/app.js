//page4 to 5
$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"zpage5/z" + $(this).attr("id") + ".html");
	});
});