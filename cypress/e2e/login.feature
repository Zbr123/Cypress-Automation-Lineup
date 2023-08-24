Feature: Login

  Scenario: I should be able to login and see tabs on dashboard
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    Then I should see "Planning" tab on the dashboard
    When I click on "Planning" tab on the dashboard
    Then I should see "Tracking" tab on the dashboard
    When I click on "Tracking" tab on the dashboard
    Then I should see "Management" tab on the dashboard
    When I click on "Management" tab on the dashboard


  Scenario: I should see 'Incorrect email and password' error if wrong email or pass is entered
    Given I visit lineup.ai
    When I enter email "bad@test.com" and password "bad"
    Then I should see "incorrect email or password" error

