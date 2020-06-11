$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Test1.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TestCase1: Validate number 10 is exactly divisible by 3.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "values 10 and 3",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate values",
  "keyword": "When "
});
formatter.match({
  "location": "Test.calculate_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.result()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c0\u003e but was:\u003c1\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:234)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:241)\r\n\tat stepdefinations.Test.result(Test.java:40)\r\n\tat ✽.result(src/test/java/features/Test1.feature:8)\r\n",
  "status": "failed"
});
formatter.uri("src/test/java/features/Test2.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TestCase2: Comparison of two Strings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "String values \"Test1\" and \"Test2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.string_values_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "compare of two strings",
  "keyword": "When "
});
formatter.match({
  "location": "Test.compare_of_two_strings()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cTest[1]\u003e but was:\u003cTest[2]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepdefinations.Test.compare_of_two_strings(Test.java:24)\r\n\tat ✽.compare of two strings(src/test/java/features/Test2.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("src/test/java/features/Test3.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TestCase3: Validate number 10 is exactly divisible by 2.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "values 10 and 2",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate values",
  "keyword": "When "
});
formatter.match({
  "location": "Test.calculate_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.result()"
});
formatter.result({
  "status": "passed"
});
});