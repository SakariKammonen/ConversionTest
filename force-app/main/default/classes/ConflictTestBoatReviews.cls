// test comment
public class ConflictTestBoatReviews {
    @AuraEnabled public static BoatReview__c[] getAll(Id boatId) {
        // Tässä nyt dummy-koodia testejä varten.
        // Muokataan molemmat näitä seuraavia rivejä ihan vapaasti ja katsotaan mitä tapahtuu gitissä
        String koira = 'karvainen conflict solved';
        // Einen kleinen comment
        Integer iii = 5;
        String kissakala = 'siperiantiikeri';
        List<String> testilista = new List<String>();
        testilista.add('eka');
        testilista.add('toinen');
        testilista.add('kolmas');
        // Lopetetaan muokkaukset tähän
        
        // Another comment
        // Hakulauseen muutettu vain järjestystä
        return [SELECT Id, Name, LastModifiedDate, Comment__c, Rating__c, 
                CreatedDate, CreatedBy.CompanyName, CreatedBy.Name, CreatedBy.SmallPhotoUrl FROM BoatReview__c WHERE Boat__c = :boatId];
    }
}