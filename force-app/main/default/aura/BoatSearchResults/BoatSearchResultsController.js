({
	doInit : function(component, event, helper) {
		helper.onSearch(component);
	},

	doSearch : function(component, event, helper) {
		var params = event.getParam('arguments');
        if (params) {
            var boatTypeId = params.boatTypeId;
			helper.onSearch(component, boatTypeId);
		}
	},

	onBoatSelect : function(component, event, helper) {
		var selectedBoatId = event.getParam("boatId");
		component.set("v.selectedBoatId", selectedBoatId);
	},
})