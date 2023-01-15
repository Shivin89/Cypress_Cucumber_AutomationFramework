

const { Given,When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../pages/HomePage";
import CarePage from "../../pages/CarePage";
import NetworkPage from "../../pages/NetworkPage";


const homePage = new HomePage();
const carePage = new CarePage();
const networkPage = new NetworkPage();

    Given("User is on the Home Page",  () => {
        cy.visit('/');
    });
    When('User clicks on Find a Doctor button on Home Page',  () => {
        homePage.getFindDoctorButton().click();
});

    When('Validate the user lands on care options page',  () => {
       networkPage.getCareOptionValidate().should('be.visible')
    });
    Given('User is on care options page',  () => {
        networkPage.getSearchNetworkButton().should('be.visible')

    });
    When('User clicks on search Network Button',  () => {
        networkPage.getSearchNetworkButton().click();
    });
    Then('validate the user is able to see select a network popup',  () => {
        networkPage.getAlertBox().should('be.visible')
    });
    Then('User is able to select coverage year',  () => {
        networkPage.getCoverageYear();
        networkPage.getCoverageYearSelect();

    });
    Then('User is able to select coverage access',  () => {
        networkPage.getCoverageAccess();
        networkPage.getCoverageAccessSelect();
    });
    Then('User is able to select  coverage area',  () => {
        networkPage.getCoverageAreas();
        networkPage.getCoverageAreasSelect();

    });

    Then('User click on continue button',  () => {
        networkPage.getContinueButton();
    });
    Then('validate user is navigated to search page',  () => {
        carePage.getSearchValidate().should('be.visible')
    });


Given('User is on the search Page',  ()  =>{
   carePage.getSearchValidate().should('be.visible')

});
When('User clicks on primary care providers from common searches',  () => {
    carePage.getPrimaryCareProvider().click();
});
When('Validate the user lands on primary care provider page',  () => {
   carePage.getPrimaryProviderValidate().should('be.visible')
});
When('User clicks on hospitals from common searches',  () => {
    carePage.getHospitals().click();
});
When('Validate the user lands on hospital care provider page',  () => {
   carePage.getHospitalValidate().should('be.visible')
});
When('User searches for specific drug',  () => {

    carePage.getSearchField().type('liptor');
    carePage.getDrugsButton().click();
    carePage.getSpecificDrugSelection().click();
});
When('Validate the user see all the results for that drug',  () => {
  carePage.getDrugValidate().should('be.visible');
})

When('Validate the correct message should be displayed',  () => {
carePage.getWrongInputValidate().should('be.visible')
});



When('User searches for wrong {string}',  (input) => {

    carePage.typeInput().type(input)
});
