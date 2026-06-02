Feature: Checkboxes

  Background:
    Given I am on the checkboxes page

  Scenario: Checkbox 1 is unchecked by default
    Then checkbox 1 should be unchecked

  Scenario: Checkbox 2 is checked by default
    Then checkbox 2 should be checked

  Scenario: Check checkbox 1
    When I check checkbox 1
    Then checkbox 1 should be checked

  Scenario: Uncheck checkbox 2
    When I uncheck checkbox 2
    Then checkbox 2 should be unchecked
