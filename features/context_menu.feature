Feature: Context Menu

  Background:
    Given I am on the context menu page

  Scenario: Right-clicking the box triggers an alert
    When I right-click the context menu box
    Then I should see an alert

  Scenario: Alert contains the correct message
    When I right-click the context menu box
    Then the alert message should be "You selected a context menu"
