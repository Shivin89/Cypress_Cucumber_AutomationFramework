Feature:Find Doctor flow Validation

Background:
    Given User is on the Home Page
    When User clicks on Find a Doctor button on Home Page
    And Validate the user lands on care options page
    Given User is on care options page
    When User clicks on search Network Button
    Then validate the user is able to see select a network popup
    Then User is able to select coverage year
    Then User is able to select coverage access
    Then User is able to select  coverage area
    Then User click on continue button
    Then validate user is navigated to search page

  Scenario Outline: Incorrect search
    When User searches for wrong '<input>'
    And Validate the correct message should be displayed
    Examples:
      | input    |
      | 12344!@@ |
      | 1223334  |
      | @##@fdjfdjf4r4r3r |


  Scenario: Verify the user is able to navigate to specific primary search page (Individual)
    When User clicks on primary care providers from common searches
    And Validate the user lands on primary care provider page

  Scenario: Verify the user is able to navigate to specific hospital search page (Individual)
    When User clicks on hospitals from common searches
    And Validate the user lands on hospital care provider page

  Scenario: Verify the user is able to navigate to specific hospital search page (Individual)
    When User searches for specific drug
    And Validate the user see all the results for that drug







