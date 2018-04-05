package com.rs.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.rs.qa.base.TestBase;

public class RSHomePage extends TestBase {
	
	@FindBy(xpath = "//a[contains(text(),'All Products')]")
	WebElement allProductsLink;
	
	RSProductPage rsProductPage;
	
	public RSHomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public String verifyHomePageTitle(){
		return driver.getTitle();
	}
	
	public RSProductPage selectProduct(String productName){	
		allProductsLink.click();
		
		WebElement rsProductLink = driver.findElement(By.xpath("//a[text()='"+ productName +"']"));		     	      
	    if (rsProductLink.isDisplayed() && rsProductLink.isEnabled()){
	    	rsProductLink.click();
	    }
	    else{
	    	Assert.fail(rsProductLink +" is not displayed in Products Grid.");
	    }	
	    return new RSProductPage();
	}
}
