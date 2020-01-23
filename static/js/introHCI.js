'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		//$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Javascript has taken control");
		$("jumbotron p").addClass("active");
		$(". jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

}

function projectClick(){

	var containingProject = $(this).closest(".project");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	//$(#"myelement").toggle()
}
