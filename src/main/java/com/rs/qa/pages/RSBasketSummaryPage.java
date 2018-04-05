package com.rs.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.rs.qa.base.TestBase;

public class RSBasketSummaryPage extends TestBase {
	
	@FindBy(xpath = "//*[@id='checkoutSecurelyAndPuchBtn']")
	WebElement checkoutSecurelyAndPuchButton;
	
	@FindBy(xpath = "//*[@id='loginGuestHidelink']")
	WebElement loginGuestHidelink;
	
	public RSBasketSummaryPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void checkout(){		
		checkoutSecurelyAndPuchButton.click();
		loginGuestHidelink.click();
	}	
	
	
	public Boolean verifyBasketItem(String itemNo){
		Boolean returnValue = true;
		WebElement rsStockNo = driver.findElement(By.xpath("//span[text()='"+itemNo+"']"));	
		
	    if (!(rsStockNo.isDisplayed())){
	           Assert.fail(itemNo +" is not displayed in View Basket Summary Page.");
	           returnValue = false;
	    }	
	   return  returnValue;
	}
}
