//page1
$(document).ready(function(){
	$(".option").on("click", function() {
	$(location).attr('href',"zpage2/z" + $(this).attr("id") + ".html");
	});
});
