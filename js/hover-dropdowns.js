/*
 * credit http://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-might-not-know#how-to-enable-bootstrap-3-hover-dropdowns
 */
$('.dropdown-toggle').click(function(){
	var location = $(this).attr('href');
	window.location.href = location;
	return false;
});