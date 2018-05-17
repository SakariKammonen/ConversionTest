public with sharing class HelloWorldController {
    // Ja tähänkin luokkaan voisi kehittää jotain konfliktoivia muutoksia olemassa oleviin riveihin.
    // Timon 16.5. 11:21 lisäämä kommentti
    @AuraEnabled
    public static User getCurrentUser() {
    	integer dummytest = 2;
        return [SELECT Id, CreatedDate, FirstName, LastName FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
        // toinen 16.5. 11:21lisätty kommentti JA KONFLIKTI RATKAISTU 14:07
    }
    
    public static void dummyMetodi() {
        string dummyStr = 'Tässä ei tapahdu yhtään mitään';
        integer intti = 535;
// TOINEN "UUSI OMINAISUUS" KOODATTU TESTIBRANCHIIN
    }
    
}