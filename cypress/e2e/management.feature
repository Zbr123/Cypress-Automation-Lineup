Feature: Management

  # Scenario: I want to view the list of All Employees
  #   Given I login in to Lineup.ai
  #   Then I should see Today's Progress Page
  #   When I click on "Management" tab on the dashboard
  #   And I click on "Employees" under Management heading
  #   Then I should see the following employees on the page:
  #     | Employees    |
  #     | Ahmed A      |

#  Scenario: I want to create a new Employee with only Active Location
#     Given I login in to Lineup.ai
#     Then I should see Today's Progress Page
#     When I click on "Management" tab on the dashboard
#     And I click on "Employees" under Management heading
#     And I click on "+ Add New" button 
#     And I enter "Test" in Employee Name Field
#     And I enter "Test+" in Employee Email Field
#     And I enter "15" in Employee Wage Field
#     And I enter "(515) 297-" in Employee Phone No Field
#     And I click on "Active" checkbox
#     And I click on "Add" button
#     Then I should see "Employee successfully added" success message on the page


#     Scenario: I should be able to see Email error when adding an existing email
#     Given I login in to Lineup.ai
#     Then I should see Today's Progress Page
#     When I click on "Management" tab on the dashboard
#     And I click on "Employees" under Management heading
#     And I click on "+ Add New" button 
#     And I enter "Test" in Employee Name Field
#     And I enter "Test+2@lineup.ai" in Employee Email Field
#     And I enter "15" in Employee Wage Field
#     And I enter "(515) 297-" in Employee Phone No Field
#     And I click on "Active" checkbox
#     And I click on "Add" button
#     Then I should be able to see Email already exist


     Scenario: I want to edit an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test2" in the search bar on the Employee Page
    And I click on Edit button of the "Test2" Employee
    And I click on "Active" checkbox
    And I click on "Update" button
    Then I should be able to see Thankyou message

    #  Scenario: I want to create a new Employee with Exclude Labour
    # Given I login in to Lineup.ai
    # Then I should see Today's Progress Page
    # When I click on "Management" tab on the dashboard
    # And I click on "Employees" under Management heading
    # And I click on "+ Add New" button 
    # And I enter "Test" in Employee Name Field
    # And I enter "Test+" in Employee Email Field
    # And I enter "15" in Employee Wage Field
    # And I enter "(515) 297-" in Employee Phone No Field
    # And I click on "Exclude labor" checkbox
    # And I click on "Add" button
    # Then I should see "Employee successfully added" success message on the page