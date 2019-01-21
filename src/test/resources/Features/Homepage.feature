Feature: Verify All Homepage Basic Funcitonalities

  @Sanity
  Scenario: Verify Applicaion Title
    Given Launch Browser And Application
    When  User In Homepage
    Then  Validate Application Title

  @Sanity
  Scenario: Verify Applicaion Logo
    Then  Verify that Application Name Should Be Display
    Then  Close all browser