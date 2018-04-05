package com.rs.qa.testcases;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.rs.qa.base.TestBase;
import com.rs.qa.pages.RSBasketSummaryPage;
import com.rs.qa.pages.RSHomePage;
import com.rs.qa.pages.RSProductPage;
import com.rs.qa.util.TestUtil;

public class EndToEndTests extends TestBase {
	RSHomePage rsHomePage;
	RSProductPage rsProductPage;
	RSBasketSummaryPage rsBasketSummaryPage;
	TestUtil testUtil;


	public EndToEndTests() {
		super();
	}
	
	@BeforeMethod
	public void setUp() {
		initialization();
		testUtil = new TestUtil();
		rsHomePage = new RSHomePage();
	}
	
	@Test(priority=1)
	public void verifyContactsLinkTest(){
		rsProductPage = rsHomePage.selectProduct("Switches");
		rsProductPage.selectCategorie("Hall Effect Switches");
		rsProductPage.selectItem("765-1197");
		rsProductPage.addItemToBasket();		
		rsBasketSummaryPage = rsProductPage.viewItemBasket();
		rsBasketSummaryPage.checkout();
	}
	
	@AfterMethod
	public void tearDown(){
		driver.quit();
	}
}
