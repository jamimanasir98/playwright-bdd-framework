Feature: Broken Images

  Background:
    Given I am on the broken images page

  Scenario: Page contains images
    Then the page should contain images

  Scenario: Some images are broken
    Then some images should be broken

  Scenario: Some images load correctly
    Then some images should load correctly
