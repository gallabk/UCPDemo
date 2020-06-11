package stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Test {
	int num1=0;
	int num2=0;
	int result=0;
	String str1=null;
	String str2=null;
	
	@Given("^values (\\d+) and (\\d+)$")
	public void values_and(int number1, int number2) {
		num1=number1;
		num2=number2;
	}

	@SuppressWarnings("deprecation")
	@When("^compare of two strings$")
	public void compare_of_two_strings() throws Exception {
		Assert.assertEquals(str1, str2);
	}
	
	@Given("^String values \"([^\"]*)\" and \"([^\"]*)\"$")
	public void string_values_and(String string1, String string2){
			  str1= string1;
			  str2=string2;
	}

	@When("^calculate values$")
	public void calculate_values() throws Exception {		
			result = num1%num2;				 
	}

	@Then("^result$")
	public void result() throws Exception {	
		Assert.assertEquals(0, result);						
	}
}
