Feature: Schedule Request

  Scenario: I want to see Schedule Requests Heading
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Schedule Requests" heading on the top of the Request Page

    Scenario: I want to submit approved request of the Employee Name
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Schedule Requests" heading on the top of the Request Page
    And I enter "Louis Lineup" in the search field on Request Page 
    And I click on Submit button of the "Louis Lineup" Employee
    And I click "Submit" button on the modal
    Then I should see "Request submitted and moved to History" success message on the page

    Scenario: I want to submit request after removing the approve checkbox 
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Schedule Requests" heading on the top of the Request Page
    And I enter "Harrison T" in the search field on Request Page 
    And I declined the checkbox of "Harrison T" Employee
    And I enter "Test" in Acstions textbox on Request Page
    And I click on Submit button of the "Harrison T" Employee
    And I click "Submit" button on the confirmation modal
    Then I should see "Request submitted and moved to History" success message on the page

    Scenario: I want to see Employee section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Employee" sub-heading on the Request Page

    Scenario: I want to see Type section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Type" sub-heading on the Request Page

    Scenario: I want to see Employee Notes section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Employee Notes" sub-heading on the Request Page

    Scenario: I want to see Request section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Request" sub-heading on the Request Page

    Scenario: I want to see Actions section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Actions" sub-heading on the Request Page

  Scenario: I want to see Request History Heading
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "History" under Management heading
    Then I should see "Request History" heading on the top of the Request Page