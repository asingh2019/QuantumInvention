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
    
@Sanity
  Scenario: Verify that Given Link should be display in homepage
    Given Launch Browser And Application
    Then  Verify that Sign in,Register,Mobile App,Galactio,SG GPS Navigation link should be available
    Then  User click on Sign in link
    Then  "Sign In" page should Open
    Then  Close all browser