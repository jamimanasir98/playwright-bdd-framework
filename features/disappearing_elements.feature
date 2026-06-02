Feature: Disappearing Elements

  Background:
    Given I am on the disappearing elements page

  Scenario: Home link is always present
    Then the "Home" nav item should be visible

  Scenario: About link is always present
    Then the "About" nav item should be visible

  Scenario: Contact Us link is always present
    Then the "Contact Us" nav item should be visible

  Scenario: Portfolio link is always present
    Then the "Portfolio" nav item should be visible

  Scenario: Page has at least 4 navigation items
    Then the page should have at least 4 nav items
