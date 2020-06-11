package pages;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
	@Before
    public void InitializeTest(Scenario scenario)  {
		System.out.println("Starting Scenario: " + scenario.getName());   
    }
    
    @After
    public void TearDownTest(Scenario scenario) {  
        if (scenario.isFailed()) {          
        	System.out.println("Failed scenario: " + scenario.getName());
        }
    }
}
