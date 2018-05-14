public class BoatSearchController {
	@AuraEnabled public static String getBoatList() {
        return JSON.serialize([SELECT Name, BoatType__c From Boat__c]);
    }
}