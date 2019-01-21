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

}
