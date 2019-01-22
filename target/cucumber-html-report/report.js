$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Camera.feature");
formatter.feature({
  "line": 1,
  "name": "Verify All Live Traffic Camera In Location Wise",
  "description": "",
  "id": "verify-all-live-traffic-camera-in-location-wise",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the Total Location Of Singapore Having Live Cameras",
  "description": "",
  "id": "verify-all-live-traffic-camera-in-location-wise;verify-the-total-location-of-singapore-having-live-cameras",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser And Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate To Cameras Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Veriy That 62 location of Singapore Having Live Traffic Camera",
  "keyword": "Then "
});
formatter.match({
  "location": "TestHomepage.launch_Browser_And_Application()"
});
formatter.result({
  "duration": 12417867183,
  "status": "passed"
});
formatter.match({
  "location": "TestCamera.navigate_To_Cameras_Tab()"
});
formatter.result({
  "duration": 521759822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "62",
      "offset": 11
    }
  ],
  "location": "TestCamera.veriy_That_location_of_Singapore_Having_Live_Traffic_Camera(int)"
});
formatter.result({
  "duration": 27870191,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify All the Location name of singapore having Live Cameras",
  "description": "",
  "id": "verify-all-live-traffic-camera-in-location-wise;verify-all-the-location-name-of-singapore-having-live-cameras",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Verify All the Location name of singapore having Live Cameras",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCamera.verify_All_the_Location_name_of_singapore_having_Live_Cameras()"
});
formatter.result({
  "duration": 13761129734,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the Total Location Of Malaysia Having Live Traffic Cameras",
  "description": "",
  "id": "verify-all-live-traffic-camera-in-location-wise;verify-the-total-location-of-malaysia-having-live-traffic-cameras",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Veriy That 25 location of Malaysia Having Live Traffic Camera",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close all browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 11
    }
  ],
  "location": "TestCamera.veriy_That_location_of_Malaysia_Having_Live_Traffic_Camera(int)"
});
formatter.result({
  "duration": 1288022,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.close_all_browser()"
});
formatter.result({
  "duration": 606228474,
  "status": "passed"
});
formatter.uri("Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Verify All Homepage Basic Funcitonalities",
  "description": "",
  "id": "verify-all-homepage-basic-funcitonalities",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Applicaion Title",
  "description": "",
  "id": "verify-all-homepage-basic-funcitonalities;verify-applicaion-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser And Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User In Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate Application Title",
  "keyword": "Then "
});
formatter.match({
  "location": "TestHomepage.launch_Browser_And_Application()"
});
formatter.result({
  "duration": 11380296717,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.user_In_Homepage()"
});
formatter.result({
  "duration": 394141377,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.validate_Application_Title()"
});
formatter.result({
  "duration": 5306819,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Applicaion Logo",
  "description": "",
  "id": "verify-all-homepage-basic-funcitonalities;verify-applicaion-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Verify that Application Name Should Be Display",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close all browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestHomepage.verify_that_Application_Name_Should_Be_Display()"
});
formatter.result({
  "duration": 32755482,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.close_all_browser()"
});
formatter.result({
  "duration": 599088019,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify that Given Link should be display in homepage",
  "description": "",
  "id": "verify-all-homepage-basic-funcitonalities;verify-that-given-link-should-be-display-in-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Launch Browser And Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Verify that Sign in,Register,Mobile App,Galactio,SG GPS Navigation link should be available",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click on Sign in link",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\"Sign In\" page should Open",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close all browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestHomepage.launch_Browser_And_Application()"
});
formatter.result({
  "duration": 12054071992,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.verify_that_Sign_in_Register_Mobile_App_Galactio_SG_GPS_Navigation_link_should_be_available()"
});
formatter.result({
  "duration": 123529043,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.user_click_on_Sign_in_link()"
});
formatter.result({
  "duration": 1517272025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 1
    }
  ],
  "location": "TestHomepage.page_should_Open(String)"
});
formatter.result({
  "duration": 39982466,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.close_all_browser()"
});
formatter.result({
  "duration": 619444297,
  "status": "passed"
});
formatter.uri("Tolls.feature");
formatter.feature({
  "line": 1,
  "name": "Verify all the Toll Gate Location Wise",
  "description": "",
  "id": "verify-all-the-toll-gate-location-wise",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the Total Location Of Singapore Having Toll Gate",
  "description": "",
  "id": "verify-all-the-toll-gate-location-wise;verify-the-total-location-of-singapore-having-toll-gate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser And Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate To Tolls Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Veriy That 77 location of Singapore Having Toll Gate",
  "keyword": "Then "
});
formatter.match({
  "location": "TestHomepage.launch_Browser_And_Application()"
});
formatter.result({
  "duration": 11563743875,
  "status": "passed"
});
formatter.match({
  "location": "TestTolls.navigate_To_Tolls_Tab()"
});
formatter.result({
  "duration": 474897089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77",
      "offset": 11
    }
  ],
  "location": "TestTolls.veriy_That_location_of_Singapore_Having_Toll_Gate(int)"
});
formatter.result({
  "duration": 20095489,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify All the Location name of singapore having Toll Gate",
  "description": "",
  "id": "verify-all-the-toll-gate-location-wise;verify-all-the-location-name-of-singapore-having-toll-gate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Verify All the Location name of singapore having Toll Gate",
  "keyword": "Then "
});
formatter.match({
  "location": "TestTolls.verify_All_the_Location_name_of_singapore_having_Toll_Gate()"
});
formatter.result({
  "duration": 18578383822,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the Total Location Of Malaysia Having Live Traffic Cameras",
  "description": "",
  "id": "verify-all-the-toll-gate-location-wise;verify-the-total-location-of-malaysia-having-live-traffic-cameras",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Veriy That 25 location of Malaysia Having Live Traffic Camera",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close all browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 11
    }
  ],
  "location": "TestCamera.veriy_That_location_of_Malaysia_Having_Live_Traffic_Camera(int)"
});
formatter.result({
  "duration": 1124278,
  "status": "passed"
});
formatter.match({
  "location": "TestHomepage.close_all_browser()"
});
formatter.result({
  "duration": 598952217,
  "status": "passed"
});
});