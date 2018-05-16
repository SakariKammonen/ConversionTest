// test comment
public class ConflictTestBoatReviews {
    @AuraEnabled public static BoatReview__c[] getAll(Id boatId) {
        // Tässä nyt dummy-koodia testejä varten.
        // Muokataan molemmat näitä seuraavia rivejä ihan vapaasti ja katsotaan mitä tapahtuu gitissä
        Integer iiix = 255;
        String catfish = 'ruijanpallas';
        List<String> textlist = new List<String>();
        textlist.add('first');
        textlist.add('second');
        textlist.add('third');
        // Lopetetaan muokkaukset tähän
        
        // Another comment
        // Hakulauseen muutettu vain järjestystä
        return [SELECT Id, Name, LastModifiedDate, Comment__c, Rating__c, 
                CreatedDate, CreatedBy.CompanyName, CreatedBy.Name, CreatedBy.SmallPhotoUrl FROM BoatReview__c WHERE Boat__c = :boatId];
    }
}