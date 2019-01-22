package com.mapsynq.pages;


import com.mapsynq.basest.baseclass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage extends baseclass {

    @FindBy(xpath = "//*[@id=\"div_header\"]/a")
    private  WebElement APPLICATION_LOGO;
    @FindBy(id = "txtGlobalSearch")
    private  WebElement SEARCH_BUTTON_SELECTOR;
    @FindBy(xpath = "//*[text()=\"Sign in\"]")
    private  WebElement SIGN_IN;
	@FindBy(xpath = "//*[text()=\"Register \"]")
    private  WebElement Register;
	@FindBy(xpath = "//*[text()=\"Mobile App\"]")
    private  WebElement Mobile_App;
    @FindBy(xpath = "//*[text()=\"Galactio\"]")
    private  WebElement Galactio;
    @FindBy(xpath = "//*[text()=\"SG GPS Navigation\"]")
    private  WebElement SG_GPS_Navigation;
    @FindBy(xpath = "//*[text()=\"SG GPS Navigation\"]")
    private  WebElement Sign_in_page;


    public Homepage() {
        PageFactory.initElements(driver, this);
    }
    public String ValidatePageTitle() {
        return driver.getTitle();
    }

    public boolean isLogoDisplayed(boolean value ) {
         value=APPLICATION_LOGO.isDisplayed();
        return value;
    }
    public String VerifySigninLink(){

        return SIGN_IN.getAttribute("innerText");

    }

    public void ClickOnSignInlink() throws InterruptedException {

        SIGN_IN.click();

        wait(500);

    }

    public String VerifySigninPage(){

        return Sign_in_page.getText();

    }


 /*   public boolean VerifyHomepageLink() {

        boolean result = (SIGN_IN.getAttribute("innerText").equals("Sign in")) &&

                (Register.getAttribute("innerText").equals("Channel Group Responsibilities")) &&

                (Mobile_App.getAttribute("innerText").equals("Filling Rota")) &&

                (Galactio.getAttribute("innerText").equals("Stay Late Rota")) &&

                (SG_GPS_Navigation.getAttribute("innerText").equals("Reserves")) &&

                (Traffic_Product_Allocation.getAttribute("innerText").equals("Traffic Product Allocation"));

        return result;

    }*/

}
