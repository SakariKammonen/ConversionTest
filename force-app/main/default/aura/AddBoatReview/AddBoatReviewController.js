({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);	
	},

	onSave : function(component, event, helper) {
		component.find("service").saveRecord($A.getCallback(function(saveResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
				// handle component related logic in event handler
				var resultsToast = $A.get("e.force:showToast");
				if(resultsToast) {
					resultsToast.setParams({
						"title": "Saved",
						"message": "The review was saved."
					});
					resultsToast.fire();	
				} else {
					alert('Review saved.')
				}
				helper.onInit(component, event, helper);
				var BoatReviewAddedEvent = component.getEvent("BoatReviewAdded");		
				BoatReviewAddedEvent.fire();

            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
	},

	onRecordUpdated : function(component, event, helper) {
		var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            // record is changed, so refresh the component (or other component logic)
			var resultsToast = $A.get("e.force:showToast");
			if(resultsToast) {
				resultsToast.setParams({
					"title": "Saved",
					"message": "The record was updated."
				});
				resultsToast.fire();	
			} else {
				alert('Review updated.')
			}

        } else if(eventParams.changeType === "LOADED") {
			// record is loaded in the cache
			console.log('record loaded');
        } else if(eventParams.changeType === "REMOVED") {
			// record is deleted and removed from the cache
			console.log('record removed');
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving or deleting the record
        }
	},
})