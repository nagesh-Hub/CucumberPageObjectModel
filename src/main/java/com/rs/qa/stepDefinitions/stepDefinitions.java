package com.rs.qa.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;

import com.rs.qa.pages.RSHomePage;
import com.rs.qa.util.TestUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import com.rs.qa.base.TestBase;
import com.rs.qa.pages.RSBasketSummaryPage;
import com.rs.qa.pages.RSProductPage;


public class stepDefinitions extends TestBase {
		
	RSHomePage rsHomePage;
	RSProductPage rsProductPage;
	RSBasketSummaryPage rsBasketSummaryPage;
	TestUtil testUtil;
	
	 @Before
	    public void setup() {
			initialization();
			testUtil = new TestUtil();
	 	}
		
	 @Given("^I Open RS Home Page$")
	 public void i_Open_RS_Home_Page() throws Throwable {
		rsHomePage = new RSHomePage();
	 }

	 @Given("^Select \"([^\"]*)\" Product$")
	 public void select_Product(String arg1) throws Throwable {
		 rsProductPage = rsHomePage.selectProduct(arg1);	 
	 }

	 @Given("^Select \"([^\"]*)\" Categorie$")
	 public void select_Categorie(String arg1) throws Throwable {
		 rsProductPage.selectCategorie(arg1);	 		 
	 }
	 
	 @Given("^Select \"([^\"]*)\" SubCategorie$")
	 public void select_SubCategorie(String arg1) throws Throwable {
		 rsProductPage.selectCategorie(arg1);	 		 
	 }

	 @Given("^Select \"([^\"]*)\" Item$")
	 public void select_Item(String arg1) throws Throwable {
		 rsProductPage.selectItem(arg1);
	 }

	 @Given("^Add Item To Basket$")
	 public void add_Item_To_Basket() throws Throwable {
		rsProductPage.addItemToBasket();		
	 }

	 @When("^Click on view Basket button$")
	 public void click_on_view_Basket_button() throws Throwable {
		rsBasketSummaryPage = rsProductPage.viewItemBasket();
	 }

	 @Then("^Verify \"([^\"]*)\" Item has displayed in Basket Summary Page$")
	 public void verify_Item_has_displayed_in_Basket_Summary_Page(String arg1) throws Throwable {
			rsBasketSummaryPage.verifyBasketItem(arg1);
	 }

	 @After
	    public void tearDown() {
	        driver.quit();
	 }

}


