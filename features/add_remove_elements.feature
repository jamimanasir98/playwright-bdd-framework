Feature: Add/Remove Elements

  Background:
    Given I am on the add remove elements page

  Scenario: Add a single element
    When I add 1 element
    Then there should be 1 delete button

  Scenario: Delete a single element
    When I add 1 element
    And I remove 1 element
    Then there should be 0 delete buttons

  Scenario: Add multiple elements
    When I add 3 elements
    Then there should be 3 delete buttons

  Scenario: Add then remove some elements
    When I add 3 elements
    And I remove 1 element
    Then there should be 2 delete buttons

  Scenario: Remove all elements
    When I add 3 elements
    And I remove all elements
    Then there should be 0 delete buttons
    And the add element button should still be visible

  Scenario: Remove the first added element
    When I add 3 elements
    And I remove the first element
    Then there should be 2 delete buttons

  Scenario: Remove the last added element
    When I add 3 elements
    And I remove the last element
    Then there should be 2 delete buttons
