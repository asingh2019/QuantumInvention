Feature: Verify all the Toll Gate Location Wise

  @Sanity
  Scenario: Verify the Total Location Of Singapore Having Toll Gate
   Given Launch Browser And Application
   When  Navigate To Tolls Tab
   Then  Veriy That 77 location of Singapore Having Toll Gate

  @Sanity
  Scenario: Verify All the Location name of singapore having Toll Gate
    Then    Verify All the Location name of singapore having Toll Gate

  @Sanity
  Scenario: Verify the Total Location Of Malaysia Having Live Traffic Cameras
    Then Veriy That 25 location of Malaysia Having Live Traffic Camera
    Then  Close all browser
    