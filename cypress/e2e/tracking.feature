Feature: Tracking

  Scenario: I want to visit the tracking page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    Then I should see day view calculations with the following data on 'Tracking' page:
      | sales actual | sales predicted | labor planned | labor actual | labor suggested | weather |
      |     –        | $0              |      –        |    0 hr      | 20 hr           | 75      |
    Then I should see Breakdown Table


  Scenario: I want to see week's progress on the tracking page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Week" button
    Then I should see week view calculations with the following data on 'Tracking' page:
      | sales actual | sales predicted | labor planned | labor actual | labor suggested |
      | $78,319      | $5,993          | –             | 0 hr         | 101 hr          |
    Then I should see last week Recap
    Then I should see Breakdown Table      




