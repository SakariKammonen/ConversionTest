({
    doInit : function(component, event, helper) {

		var getBoatsAction = component.get("c.getBoatList");

		getBoatsAction.setCallback(this, function(result){
            var boats = result.getReturnValue();
            component.set("v.boatOptions", JSON.parse(boats));;
        });
        $A.enqueueAction(getBoatsAction);

        var createBoatEvent = $A.get("e.force:createRecord");
        if(createBoatEvent) {
            component.set("v.isOneApp", "true");
        } else {
            console.log('init, not showing create new button in standalone app');
        }
    },
    
    handleNew : function(component, event, helper) {
        var createBoatEvent = $A.get("e.force:createRecord");
        if(createBoatEvent) {
			var selectedBoat = component.get("v.selectedBoat");
			if(selectedBoat == '') {
				createBoatEvent.setParams({
					"entityApiName": "Boat__c"
				});
			} else {
				console.log('boat not empty');
				createBoatEvent.setParams({
					"entityApiName": "Boat__c",
					"defaultFieldValues": {
						'BoatType__c' : selectedBoat
					}
				});
			}
            createBoatEvent.fire();	
        } else {
            console.log("event not supported in stand-alone app");
        }
    },
    
    onFormSubmit : function(component, event, helper) {
		var boat = component.get("v.selectedBoat");
		var formSubmit = component.getEvent("FormSubmit");		
		
		formSubmit.setParams({
			"formData": // object in our event
				{"boatTypeId" : boat} // can set any kind of arbitratry properties to Object attribute in our event
		});
		formSubmit.fire();
    },
})