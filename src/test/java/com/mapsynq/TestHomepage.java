package com.mapsynq;


import com.mapsynq.basest.baseclass;
import com.mapsynq.helper.assertion.AssertionHelper;
import com.mapsynq.pages.CameraPages;
import com.mapsynq.pages.Homepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TestHomepage extends baseclass {

    Homepage homepage = new Homepage(); ;
    CameraPages camerapages=new CameraPages();;

    public TestHomepage() { super();}

    @Given("^Launch Browser And Application$")
    public void launch_Browser_And_Application() throws Throwable {
        initialization();


    }

    @When("^User In Homepage$")
    public void user_In_Homepage() throws Throwable {

        captureScreen("Homepage",driver);
    }

    @Then("^Validate Application Title$")
    public void validate_Application_Title() throws Throwable {
        String Title="mapSYNQ - Live Traffic Information Platform";
        Assert.assertEquals(homepage.ValidatePageTitle(),Title);
    }

    @Then("^Close all browser$")
    public void close_all_browser() throws Throwable {
        driver.quit();
    }

    @Then("^Verify that Application Name Should Be Display$")
    public void verify_that_Application_Name_Should_Be_Display() throws Throwable {
      Assert.assertTrue(homepage.isLogoDisplayed(true));
    }
    @Then("^Verify that \"([^\"]*)\" link display in homepage$")
    public void verify_that_link_display_in_homepage(String SignInLink) throws Throwable {
       Assert.assertEquals(homepage.VerifySigninLink(),SignInLink);
    }


    @Then("^User click on Sign in link$")
    public void user_click_on_Sign_in_link() throws Throwable {
        homepage.ClickOnSignInlink();
    }

    @Then("^Sign in page should Open$")
    public void sign_in_page_should_Open() throws Throwable {
        homepage.VerifySigninPage();
    }

    @Then("^User click on Register  link$")
    public void user_click_on_Register_link() throws Throwable {
    }

    @Then("^Register  page should Open$")
    public void register_page_should_Open() throws Throwable {
    }

    @Then("^User click on Mobile App link$")
    public void user_click_on_Mobile_App_link() throws Throwable {
    }

    @Then("^Mobile App page should Open$")
    public void mobile_App_page_should_Open() throws Throwable {
    }

    @Then("^User click on Galactio link$")
    public void user_click_on_Galactio_link() throws Throwable {
    }
   
   @Then("^Galactio page should Open$")
    public void galactio_page_should_Open() throws Throwable {
    }

    @Then("^User click on SG GPS Navigation link$")
    public void user_click_on_SG_GPS_Navigation_link() throws Throwable {
    }

    @Then("^SG GPS Navigation page should Open$")
    public void sg_GPS_Navigation_page_should_Open() throws Throwable {
    	
    }

}

    

}
