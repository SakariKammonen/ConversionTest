({
    doInit : function(component, event, helper) {
		var showBoatDetailsEvent = $A.get("e.force:navigateToSObject");
        if(showBoatDetailsEvent) {
            component.set("v.fullDetailsAvailable", "true");
        } else {
            console.log('init, not showing full details button because event not available in this platform');
        }
	},
	
	onFullDetails : function(component, event, helper) {
		var showBoatDetailsEvent = $A.get("e.force:navigateToSObject");
		showBoatDetailsEvent.setParams({
			"recordId": component.get("v.boat").Id
		  });
		showBoatDetailsEvent.fire();
	},
})