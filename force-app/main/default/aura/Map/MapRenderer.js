({
    rerender: function (component) {
        
        var nodes = this.superRerender();
        
        var location = component.get('v.location');
		    
        if (!location) {
           console.log('no location');
        } else {
            // If the Leaflet library is not yet loaded, we can't draw the map: return
            if (!window.L) {
                console.log('returning nodes');
                return nodes;
            }
            
            // Draw the map if it hasn't been drawn yet
            if (!component.map) {
                console.log('drawing map first time');
                var mapElement = component.find("map").getElement();
                component.map = L.map(mapElement, {zoomControl: true}).setView([42.356045, -71.085650], 13);
                component.map.scrollWheelZoom.disable();
                window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles © Esri'}).addTo(component.map);
            }
            
            
            console.log('location:' + location);
            console.log('location.lat:' + location.lat);
            console.log('location long:' + location.long);
            if (location && location.lat && location.long) {
                console.log('location ok');
                var latLng = [location.lat, location.long];
                if (component.marker) {
                    component.marker.setLatLng(latLng);
                    console.log('drawing marker component.marker');
                } else {
                    component.marker = window.L.marker(latLng);
                    component.marker.addTo(component.map);
                    console.log('drawing marker else');
                }
                component.map.setView(latLng);
            }
            
            return nodes;
        }
        
    }
})