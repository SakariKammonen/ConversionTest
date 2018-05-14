({
	onInit : function(component, event, helper) {
		var getAllReviewsAction = component.get("c.getAll");
		getAllReviewsAction.setParams({
			"boatId": component.get("v.boat").Id
		});	

		console.log('boat reviews boat id: ' + component.get("v.boat").Id);
		getAllReviewsAction.setCallback(this, function(response) {
            if (response.getState() === 'SUCCESS') {
				// UGGGGGGGGGHHHHH. if I _DO NOT_ assign the response to a variable, the response when logged to console is [object Object] etcetc.
				// so ALWAYS HAVE TO assign the response to a variable first
				var reviews = response.getReturnValue();
				component.set("v.boatReviews", reviews);
            } else if (response.getState() === 'ERROR') {
                var errors = getAllReviewsAction.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
   	                 console.log(errors[0].message);
                    }
                }
            }
        });
        $A.enqueueAction(getAllReviewsAction);
	},
})