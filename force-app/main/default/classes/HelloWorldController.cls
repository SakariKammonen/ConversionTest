public with sharing class HelloWorldController {
    // Ja tähänkin luokkaan voisi kehittää jotain konfliktoivia muutoksia olemassa oleviin riveihin.
    @AuraEnabled
    public static User getCurrentUser() {
    
        return [SELECT Id, FirstName, LastName FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
    }
    
    
}