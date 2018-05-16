({
    doInit : function(component, event, helper) {
        // Ja tähän funktioon tehdään jotain ihan random-muutoksia olemassa oleviin riveihin
        var action = component.get("c.getCurrentUser");
        action.setCallback(this, function(response) {
            var username = response.getReturnValue();
            component.set("v.greeting", user.FirstName);
        })
        $A.enqueueAction(action);
    }
})