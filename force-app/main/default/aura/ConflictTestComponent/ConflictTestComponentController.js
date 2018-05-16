({
    doInit : function(component, event, helper) {
        // Ja tähän funktioon tehdään jotain ihan random-muutoksia olemassa oleviin riveihin
        var actzione = component.get("c.getCurrentUser");
        actzione.setCallback(this, function(response) {
            var modattuUser = response.getReturnValue();
            component.set("v.greeting", modattuUser.FirstName);
        })
        $A.enqueueAction(actzione);
    }
})