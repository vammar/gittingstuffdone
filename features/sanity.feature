Feature: Executable scenarios

  In order to verify that my cucumber system is setup correctly
  I want to execute some simple scenarios

@browser
Scenario: browser automation

  Given I'm on the test screen
  Then I should see "Mocha Tests" in the title

