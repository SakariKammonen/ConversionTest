// test comment
public class ConflictTestBoatReviews {
    @AuraEnabled public static BoatReview__c[] getAll(Id boatId) {
        // Tässä nyt dummy-koodia testejä varten.
        // Muokataan molemmat näitä seuraavia rivejä ihan vapaasti ja katsotaan mitä tapahtuu gitissä
        String koira = 'karvainen';
        // Einen kleinen comment
        Integer iii = 5;
        String kissakala = 'siperiantiikeri';
        List<String> testilista = new List<String>();
        testilista.add('eka');
        testilista.add('toinen');
        testilista.add('kolmas');
        // Lopetetaan muokkaukset tähän
        
        // Another comment
        return [SELECT Id, Name, Comment__c, Rating__c, LastModifiedDate, 
                CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName FROM BoatReview__c WHERE Boat__c = :boatId];
    }
}