package com.rs.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.rs.qa.base.TestBase;

public class RSProductPage extends TestBase {

	@FindBy(xpath="//*[@id='price-break-container']/div/div[2]/div/div[3]/button")
	WebElement addtobasketButton;
	
	@FindBy(xpath="//*[@id='price-break-container']/div/div[2]/div/div[4]/button")
	WebElement viewbasketButton;
	
	RSBasketSummaryPage rsBasketSummaryPage;

	public RSProductPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void selectCategorie(String categorieName){	
		
		WebElement rsCategorieLink = driver.findElement(By.linkText(categorieName));	
	    if (rsCategorieLink.isDisplayed() && rsCategorieLink.isEnabled()){
	        	rsCategorieLink.click();
	    }
	    else{
	           Assert.fail(categorieName +" is not displayed in Categorie Grid.");
	    }		
	}
	
	public void selectItem(String itemNo){	
		WebElement rsStockNoLink = driver.findElement(By.xpath("//a[contains(text(),'"+ itemNo +"')]"));		     	      
	    if (rsStockNoLink.isDisplayed() && rsStockNoLink.isEnabled()){
	  	      rsStockNoLink.click();
	    }
	    else{
	           Assert.fail(itemNo +" is not displayed in Switch Grid.");
	    }		
	}
	
	public void addItemToBasket(){	
		if (addtobasketButton.isDisplayed() && addtobasketButton.isEnabled()){
	        	addtobasketButton.click();
	    }
	    else{
	            Assert.fail("Add To Basket' button is either not enabled or not displayed");
	    }		
	}
	
	public RSBasketSummaryPage viewItemBasket(){	
        if (viewbasketButton.isDisplayed() && viewbasketButton.isEnabled()){
        	viewbasketButton.click();
        }
        else{
            Assert.fail("'View Basket' button is either not enabled or not displayed");
        }	
		return new RSBasketSummaryPage();
	}
}
