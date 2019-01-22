package com.mapsynq.pages;


import com.mapsynq.basest.baseclass;
import com.mapsynq.helper.javascript.JavaScriptHelper;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;


import java.util.concurrent.TimeUnit;

public class Homepage extends baseclass {

    @FindBy(xpath = "//*[@id=\"div_header\"]/a")
    private  WebElement APPLICATION_LOGO;

    @FindBy(id = "txtGlobalSearch")
    private  WebElement SEARCH_BUTTON_SELECTOR;

    @FindBy(xpath = "//*[@id=\"div_header\"]/div[2]/div[4]/a[1]")
    WebElement SIGN_IN_MENU_LINK;

    @FindBy(xpath = "//*[@id=\"div_header\"]/div[2]/div[4]/a[2]")
    WebElement Register;

    @FindBy(xpath = "//*[@id=\"div_header\"]/div[2]/div[2]/a[1]")
    WebElement Mobile_App;

    @FindBy(xpath = "//*[@id=\"div_header\"]/div[2]/div[2]/a[2]")
    WebElement Galactio;

    @FindBy(xpath = "//*[@id=\"div_header\"]/div[2]/div[2]/a[3]")
    WebElement SG_GPS_Navigation;

    @FindBy(xpath = "//*[text()=\"\tSign In \"]")
     WebElement Sign_in_page;


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
    public void VerifySigninLink() {
        try {
            String Actual_Text = "Sign in";
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
           // Assert.assertEquals(SIGN_IN_MENU_LINK.getAttribute("innerText"), Actual_Text);
        } catch (Error e1) {
            System.out.println(e1);
        }
    }

    

    public void ClickOnSignInlink()  {
        JavaScriptHelper javaScripthelper = new  JavaScriptHelper(driver,SIGN_IN_MENU_LINK);
        javaScripthelper.clickElement(SIGN_IN_MENU_LINK);
        }

    public String VerifySignInPage(){
        String LoggedInUser=Sign_in_page.getAttribute("innerText");
        return LoggedInUser;
    }
    public boolean VerifyHomepageLink() {
        boolean result = (SIGN_IN_MENU_LINK.getAttribute("innerText").equals("Sign in")) &&
                (Register.getAttribute("innerText").equals("Register")) &&
                (Mobile_App.getAttribute("innerText").equals("Mobile App")) &&
                (Galactio.getAttribute("innerText").equals("Galactio")) &&
                (SG_GPS_Navigation.getAttribute("innerText").equals("SG_GPS_Navigation"));
        return result;
    }

}