Feature: Basic Auth

  Scenario: Successful authentication with valid credentials
    Given I access the basic auth page with valid credentials
    Then I should see the authentication success message

  Scenario: Failed authentication with invalid credentials
    Given I access the basic auth page with invalid credentials
    Then I should not see the authentication success message
