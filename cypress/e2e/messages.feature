Feature: Messages

  Scenario: I want to view Messages section
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Messages" heading on the top of the Messages Page


  Scenario: I want send message to All Employees
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    And I click on "New Message" button
    And I enter "Test" Messages textarea
    And I click on "Send Message to All Employees" button
    Then I should see success message on Messages Page

   Scenario: I want to see Date subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Date" subheading on the top of the Messages Page

  Scenario: I want to see Sender subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Sender" subheading on the top of the Messages Page

    Scenario: I want to see Messages subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Messages" subheading on the top of the Messages Page

  Scenario: I want to see following date on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following date on the Messages:
      |    Date    |
      | 08/19/2023 |

  Scenario: I want to see following Sender on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following sender on the Messages:
      |    sender    |
      | Lineup Demo  |

    Scenario: I want to see following Sender on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following message on the Messages:
      |    message   |
      |     Test     |