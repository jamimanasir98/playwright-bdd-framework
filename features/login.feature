Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should see a success message

  Scenario Outline: Invalid login attempts
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I should see an error message

    Examples:
      | username   | password              |
      | wrongUser  | SuperSecretPassword!  |
      | tomsmith   | wrongPass             |
      |            |                       |
      |            | SuperSecretPassword!  |
      | tomsmith   |                       |