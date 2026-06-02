Feature: Dropdown

  Background:
    Given I am on the dropdown page

  Scenario: Default placeholder is selected on load
    Then the default placeholder option should be selected

  Scenario: Select Option 1
    When I select "Option 1"
    Then "Option 1" should be selected

  Scenario: Select Option 2
    When I select "Option 2"
    Then "Option 2" should be selected

  Scenario: Switch from Option 1 to Option 2
    When I select "Option 1"
    And I select "Option 2"
    Then "Option 2" should be selected
