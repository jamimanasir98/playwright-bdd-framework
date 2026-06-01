Feature: Drag and Drop

  Background:
    Given I am on the drag and drop page

  Scenario: Initial layout has A on the left and B on the right
    Then column A should be labelled "A"
    And column B should be labelled "B"

  Scenario: Dragging A to B swaps the columns
    When I drag column A to column B
    Then column A should be labelled "B"
    And column B should be labelled "A"
