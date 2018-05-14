({
	onBoatClick : function(component, event, helper) {
		var selectedBoatId = component.get("v.boat").Id;
		var boatSelectEvent = component.getEvent("BoatSelect");
		boatSelectEvent.setParam("boatId", selectedBoatId);
		boatSelectEvent.fire();

		var boatSelectAppEvent = $A.get("e.c:BoatSelected");
		boatSelectAppEvent.setParam("boat", component.get("v.boat"));
		boatSelectAppEvent.fire();

		var mapMarkerEvent = $A.get("e.c:PlotMapMarker");
		mapMarkerEvent.setParams({
			"lat": component.get("v.boat").Geolocation__Latitude__s,
			"long": component.get("v.boat").Geolocation__Longitude__s	
		});
		mapMarkerEvent.fire();
	},
})