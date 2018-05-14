({
	onSearch : function(component, boatTypeId) {
		var boatSearchAction = component.get("c.getBoats");
		if(boatTypeId) {
			boatSearchAction.setParams({
				"boatTypeId": boatTypeId
			});	
		}

		boatSearchAction.setCallback(this, function(result){
			var boats = result.getReturnValue();
			console.log(boats);
            component.set("v.boats", boats);
        });
        $A.enqueueAction(boatSearchAction);
	},
})