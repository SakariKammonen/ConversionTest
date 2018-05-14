({
	refreshReviewsTab : function(component) {
		console.log('in refreshRewviewsTab function');
		var boatReviewsCmp = component.find("boatreviewscmp");
		// boatreviewscmp is undefined when the BoatDetails component is loaded because the reviews tab will not be loaded until the tab is clicked, so we can't call the component's refresh method unless we know that the component exists
		if(boatReviewsCmp != undefined) {
			boatReviewsCmp.refresh();
		}
	},
})