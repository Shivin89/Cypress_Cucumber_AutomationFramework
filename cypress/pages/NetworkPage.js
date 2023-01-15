class NetworkPage {

    getSearchNetworkButton() {
        return cy.get("button[ class='Button_button__1_TCE CTABase_base__dmoHJ CTABase_base_secondary__10EcP CTABase_oscar2020_light__2O5XN CTABase_base_button__3E47u']");
    }
    getCareOptionValidate(){
      return  cy.contains('Find your nearest in-network provider')
    }

    getAlertBox() {
        return cy.get("section[class='Modal_modalContent__39i0G']");
    }

    getCoverageYear() {
        return  cy.xpath('(//div[contains(@class, "Dropdown_visibleContent__NGHUm")])[1]').click();

    }

    getCoverageYearSelect() {
        return cy.xpath('//*[@id="20232023"]').click();
    }


    getCoverageAccess() {
        return cy.xpath('(//div[contains(@class, "Dropdown_visibleContent__NGHUm")])[2]').click();

    }

    getCoverageAccessSelect() {
        return cy.xpath("//*[@id='INDIVIDUALIndividual (I buy my own insurance)']/div").click();
    }

    getCoverageAreas() {
        return cy.xpath('(//div[contains(@class, "Dropdown_visibleContent__NGHUm")])[4]').click();

    }

    getCoverageAreasSelect() {
        return cy.xpath("//*[@id='California - Bay AreaCalifornia - Bay Area']").click();

    }
    getContinueButton() {
        return cy.get('[class ="Button_buttonBase__26hAr Button_filled__1Lgot Button_button_primary__1BOBS Button_button_medium__2_2dm NetworkSelector_buttonSubmit__l3NsD"]').click();

    }
}
export default NetworkPage;
