({
	onInit : function(component, event, helper) {
		// Prepare a new record from template
		component.find("service").getNewRecord(
			"BoatReview__c", // sObject type (objectApiName)
			null,      // recordTypeId
			false,     // skip cache?
			$A.getCallback(function() {
				var rec = component.get("v.boatReview");
				var error = component.get("v.recordError");
				if(error || (rec === null)) {
					console.log("Error initializing record template: " + error);
					return;
				}
				console.log("Record template initialized: " + rec.sobjectType);
				component.set("v.boatReview.Boat__c", component.get("v.boat").Id);
			})
		);	
	},
})