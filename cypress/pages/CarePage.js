class CarePage {

    getSearchValidate(){
       return cy.contains('Search in-network providers, facilities, and drugs')
    }

    getSearchField() {
        return cy.get('#mainContent > div.h-2LOeJ6sr6uqLhpgKR6cnDE.o-container > div > div > div.h-2jbAT4XdlcjLjbjicCmAlp.o-inputs > div.h-1gTVGysEHcIrCxG55X8A-m.o-multientityInput > div > div > div > div.h-330_Kam5YnkgWL6uXAMwVJ.o-placeholder > div');
    }
    getPrimaryCareProvider(){
        return cy.get('#mainContent > div.h-2LOeJ6sr6uqLhpgKR6cnDE.o-container > div > div > div.h-2UzF6vFs2c5gP8CWjWTRsO.o-links > a:nth-child(2)')
    }
    getHospitals(){
        return cy.get('#mainContent > div.h-2LOeJ6sr6uqLhpgKR6cnDE.o-container > div > div > div.h-2UzF6vFs2c5gP8CWjWTRsO.o-links > a:nth-child(3)')
    }
    getDrugsButton(){
        return  cy.get('#mainContent > div.h-2LOeJ6sr6uqLhpgKR6cnDE.o-container > div > div > div.h-2jbAT4XdlcjLjbjicCmAlp.o-inputs > div.h-1gTVGysEHcIrCxG55X8A-m.o-multientityInput > div > div > div > div.h-1WRxo7WevgPEQQIqQcSlA4.o-resultsContainer > div > div.h-m6dVDYCknxD_ORMParcK2.o-header > button:nth-child(4) > h4 > span');
    }

    getSpecificDrugSelection()
    {
      return   cy.xpath('//*[contains(@class, "h-20HToX2icEu-3jvTwoiYKW o-ellipsis h-1k3lXDaL3DGNudZtyxTID9 o-primaryText")][text()[contains(.,"Lipoflavonoid ⋅ Vitamins W/ Lipotropics")]]');
    }

    getDrugValidate(){
       return  cy.xpath('//*[contains(@class, "h-1emOimqQSYpPd2q-6M0s9V o-title")][text()[contains(.,"Lipoflavonoid")]]');
    }

    getHospitalValidate(){
       return  cy.contains('Hospital');
    }

    getPrimaryProviderValidate(){
       return cy.xpath('(//span[contains(@class, "h-3Y7bt3-GC695jjsaM6lp6X o-link _DEPRECATED_DO_NOT_USE_TextLinkElement h-XQQvClXCh4_ruvrBHfNWK o-link_underline h-u_Wutlj9bJf6Is3CWX8oe o-link_light")])[2]', { timeout: 10000 });
    }

    typeInput(input) {
      return  cy.get('[class="h-3419BW0DMOHRoKSKuyHcvq o-placeholderText h-1k3lXDaL3DGNudZtyxTID9 o-primaryText"]');
    }
    getWrongInputValidate(){
        return cy.get('[class="h-1gxJ9Lqbh-v28tKj4eIAMG o-basicLink h-2p2jnOiRlLaGfyQguk3ZNG o-logo"]')

    }
}

export default CarePage;
