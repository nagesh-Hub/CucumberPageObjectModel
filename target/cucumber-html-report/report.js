$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/EndToEnd.feature");
formatter.feature({
  "id": "endtoend",
  "description": "",
  "name": "EndToEnd",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 7486415629,
  "status": "passed"
});
formatter.scenario({
  "id": "endtoend;\u0027home-page-to-basket-summary-page\u0027",
  "description": "",
  "name": "\u0027Home Page To Basket Summary Page\u0027",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I Open RS Home Page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Select \"Switches\" Product",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "Select \"Hall Effect Switches\" Categorie",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "Select \"765-1197\" Item",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "Add Item To Basket",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "Click on view Basket button",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "Verify \"765-1197\" Item has displayed in Basket Summary Page",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "stepDefinitions.i_Open_RS_Home_Page()"
});
formatter.result({
  "duration": 121955787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Switches",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Product(String)"
});
formatter.result({
  "duration": 3692690415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hall Effect Switches",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Categorie(String)"
});
formatter.result({
  "duration": 3133169878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "765-1197",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Item(String)"
});
formatter.result({
  "duration": 1711938087,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.add_Item_To_Basket()"
});
formatter.result({
  "duration": 214579451,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_on_view_Basket_button()"
});
formatter.result({
  "duration": 1091233135,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"btn btn-secondary-blue btn-large nav-view-cart\"\u003e...\u003c/button\u003e is not clickable at point (1446, 888). Other element would receive the click: \u003cdiv class\u003d\"acsModalBackdrop acsAbandonButton\" data-isbackdrop\u003d\"true\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 79 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027ord-w-dabburb\u0027, ip: \u0027192.168.1.72\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_79\u0027\nSession ID: 45b4e54cfe99d42f5e6292450c7a576c\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dfalse, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\BHASKA~1.DAB\\AppData\\Local\\Temp\\scoped_dir12976_50, chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7)}, networkConnectionEnabled\u003dfalse, unexpectedAlertBehaviour\u003d, rotatable\u003dfalse, setWindowRect\u003dtrue, mobileEmulationEnabled\u003dfalse, locationContextEnabled\u003dtrue, pageLoadStrategy\u003dnormal, version\u003d65.0.3325.181, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, webStorageEnabled\u003dtrue, nativeEvents\u003dtrue, hasTouchScreen\u003dfalse, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue, acceptInsecureCerts\u003dfalse}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:335)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:348)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.rs.qa.pages.RSProductPage.viewItemBasket(RSProductPage.java:57)\r\n\tat com.rs.qa.stepDefinitions.stepDefinitions.click_on_view_Basket_button(stepDefinitions.java:69)\r\n\tat ✽.When Click on view Basket button(features/EndToEnd.feature:9)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "765-1197",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.verify_Item_has_displayed_in_Basket_Summary_Page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1068356042,
  "status": "passed"
});
formatter.before({
  "duration": 6701357531,
  "status": "passed"
});
formatter.scenario({
  "id": "endtoend;\u0027home-page-to-basket-summary-page\u0027",
  "description": "",
  "name": "\u0027Home Page To Basket Summary Page\u0027",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I Open RS Home Page",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "Select \"Batteries\" Product",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "Select \"Rechargeable Batteries\" Categorie",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "Select \"AA Rechargeable Batteries\" SubCategorie",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "Select \"617-0773\" Item",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "Add Item To Basket",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "Click on view Basket button",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "Verify \"617-0773\" Item has displayed in Basket Summary Page",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "stepDefinitions.i_Open_RS_Home_Page()"
});
formatter.result({
  "duration": 1079803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batteries",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Product(String)"
});
formatter.result({
  "duration": 3742780802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rechargeable Batteries",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Categorie(String)"
});
formatter.result({
  "duration": 3670442704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AA Rechargeable Batteries",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_SubCategorie(String)"
});
formatter.result({
  "duration": 1644813247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "617-0773",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.select_Item(String)"
});
formatter.result({
  "duration": 3938075203,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.add_Item_To_Basket()"
});
formatter.result({
  "duration": 224063970,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_on_view_Basket_button()"
});
formatter.result({
  "duration": 1685501421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "617-0773",
      "offset": 8
    }
  ],
  "location": "stepDefinitions.verify_Item_has_displayed_in_Basket_Summary_Page(String)"
});
formatter.result({
  "duration": 91347156,
  "status": "passed"
});
formatter.after({
  "duration": 1054841141,
  "status": "passed"
});
});