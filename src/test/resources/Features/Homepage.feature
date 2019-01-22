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
Scenario: Verify the Sign in Link of Homepage
	Given Launch Browser And Application
	Then  Verify that "Sign in " link display in homepage
	Then  User click on Sign in link
	Then  Sign in page should Open

	@Sanity
	Scenario: Verify the homepage menu link
		Then  Verify that "Register " link display in homepage
		Then  User click on Register  link
		Then  Register  page should Open

	@Sanity
	Scenario: Verify the homepage menu link
		Then  Verify that "Mobile App" link display in homepage
		Then  User click on Mobile App link
		Then  Mobile App page should Open

	@Sanity
	Scenario: Verify the homepage menu link
		Then  Verify that "Galactio" link display in homepage
		Then  User click on Galactio link
		Then  Galactio page should Open

	@Sanity
	Scenario: Verify the homepage menu link
		Then  Verify that "SG GPS Navigation" link display in homepage
		Then  User click on SG GPS Navigation link
		Then  SG GPS Navigation page should Open