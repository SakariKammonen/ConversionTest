<aura:application extends="force:slds" controller="BoatSearchController">
    <aura:attribute name="selectedBoat" type="String"/>
    <aura:attribute name="boatOptions" type="Boat__c[]"/>
    <!-- have to assume that we're opening this in a standalone app, otherwise internal server error if we try to show
the lightning:select -->
    <aura:attribute name="isOneApp" type="Boolean" default="false"/>
    
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    
    <lightning:card class="bottomMargin" title="Find a Boat">        
        <lightning:layout horizontalAlign="center" verticalAlign="center">
            <lightning:layoutItem flexibility="auto">
                <!-- this piece of shit lightning:select crashes in a stand-alone app WITHOUT label and name -->
                <aura:if isTrue="{!v.isOneApp}">
                    <lightning:select value="{!v.selectedBoat}">
                        <option value="">All types</option>"
                        <aura:iteration items="{!v.boatOptions}" var="boat">
                            <option value="{!boat.BoatType__c}">{!boat.Name}</option>
                        </aura:iteration>
                    </lightning:select>
                    <aura:set attribute="else">
                        <lightning:select value="{!v.selectedBoat}" label="One-app label" name="One-app name">
                            <option value="">All types</option>"
                            <aura:iteration items="{!v.boatOptions}" var="boat">
                                <option value="{!boat.BoatType__c}">{!boat.Name}</option>
                            </aura:iteration>
                        </lightning:select>                
                    </aura:set>
                </aura:if>
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto" padding="horizontal-small">
                <lightning:button variant="brand" label="Search" onclick="{! c.handleSearch }" />        
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto">
                <aura:if isTrue="{!v.isOneApp}">
                    <lightning:button variant="neutral" label="New" onclick="{! c.handleNew }" />
                </aura:if>            
            </lightning:layoutItem>
        </lightning:layout>  
        
    </lightning:card>
    <lightning:card title="Matching Boats">
        <c:BoatSearchResults />
    </lightning:card>    
</aura:application>