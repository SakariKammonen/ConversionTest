({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);	
	},

	onUserInfoClick: function(component, event, helper) {
		var showUserDetailsEvent = $A.get("e.force:navigateToSObject");
		showUserDetailsEvent.setParams({
			"recordId": event.currentTarget.dataset.userid
		  });
		showUserDetailsEvent.fire();
	},
})