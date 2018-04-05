package com.rs.qa.runner;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,		
		features = "classpath:features",
		glue = "com.rs.qa.stepDefinitions",
		plugin = {"pretty", "html:target/cucumber-html-report"},
		tags = {}
		)
public class cucumberJunitRunner {

}