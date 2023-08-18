Feature: Weekly Planning

  Scenario: I should be able to login and see tabs on dashboard
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    Then I should see "Planning" tab on the dashboard
    When I click on "Planning" tab on the dashboard
    Then I should see "Tracking" tab on the dashboard
    When I click on "Tracking" tab on the dashboard
    Then I should see "Management" tab on the dashboard
    When I click on "Management" tab on the dashboard