//page2
$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"zpage3/z" + $(this).attr("id") + ".html");
	});
});