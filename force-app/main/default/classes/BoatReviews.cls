// test comment
public class BoatReviews {
    @AuraEnabled public static BoatReview__c[] getAll(Id boatId) {
// Timon 15.5.2018 9:46 lisäämä kommentti
// Another comment
        return [SELECT Id, Name, Comment__c, Rating__c, LastModifiedDate, 
        CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName FROM BoatReview__c WHERE Boat__c = :boatId];
    }
}