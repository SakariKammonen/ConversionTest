({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    
    onBoatSelected : function(component, event, helper) {
        var lat = event.getParam("lat");
        var long = event.getParam("long");
/*
        var location = [];
        location.push({'sobjectType':'SObject', 'lat': lat, 'long': long});

        console.log('lat&long from event:' + lat + ' ' + long);
        component.set("v.location", location);
*/
        component.set("v.location", {'lat' : lat, 'long' : long});
        console.log(component.get("v.location"));
    },
})