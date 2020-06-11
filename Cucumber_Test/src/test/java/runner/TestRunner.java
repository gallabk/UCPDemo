package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"} , 
plugin = {"json:target/cucumber.json","html:target/site/cucumber-pretty"},
glue = "stepdefinations",tags = {""})
public class TestRunner {

}
