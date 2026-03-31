Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should see a success message

  Scenario Outline: Invalid login attempts
    Given I am on the login page
    When I login with invalid "<type>" credentials
    Then I should see an error message

    Examples:
      | type            |
      | wrongUsername   |
      | wrongPassword   |
      | empty           |
      | emptyUsername   |
      | emptyPassword   |