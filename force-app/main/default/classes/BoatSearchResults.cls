public class BoatSearchResults {
	@AuraEnabled public static Boat__c[] getBoats(String boatTypeId) {
        if(String.isBlank(boatTypeId)) {
            return [SELECT Name, BoatType__c, Picture__c, Contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s From Boat__c];
        } else {
            return [SELECT Name, BoatType__c, Picture__c, Contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s From Boat__c WHERE BoatType__c = :boatTypeId];
        }
    }
}