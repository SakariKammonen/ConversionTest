({
	onFormSubmit : function(component, event, helper) {
		var boat = event.getParam("formData");
		var boatType = '';

		if(boat != null && boat != '') {
			boatType = boat.boatTypeId;
		} else {
			console.log('no boat selected');
		}

		var searchResultsCmp = component.find("boatSearchResults");
		searchResultsCmp.search(boatType);		
	},
})