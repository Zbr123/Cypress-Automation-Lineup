Feature: Tracking

  Scenario: I want to visit the tracking page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    Then I should see day view calculations with the following data on 'Tracking' page:
      | sales actual | sales predicted | labor planned | labor actual | labor suggested | weather |
      | $7,580       | $4,348          | –             | 0 hr         | 118 hr          | 72      |







#    Given   I login in to Lineup.ai
#    Then    I should see Today's Progress Page
#    And      I should see the Sales information
#    And      I should see the Labor information
#    And      I should see the Weather information
#    And      I should see the Breakdown Sales