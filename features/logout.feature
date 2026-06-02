Feature: Secure Area

  Scenario: Successful logout
    Given I have logged in
    When I click the logout button
    Then I should return to the login page and I should see a confirmation message

  Scenario: Welcome message is visible after login
    Given I have logged in
    Then I should see the secure area heading

  Scenario: Accessing the secure page without logging in redirects to login
    Given I navigate directly to the secure page
    Then I should be redirected to the login page
