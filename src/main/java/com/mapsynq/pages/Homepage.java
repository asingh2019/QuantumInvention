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

}
