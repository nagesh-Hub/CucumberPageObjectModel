Feature: EndToEnd 

Scenario: 'Home Page To Basket Summary Page'
   Given I Open RS Home Page
   And Select "Switches" Product 
   And Select "Hall Effect Switches" Categorie 
   And Select "765-1197" Item 
   And Add Item To Basket
   When Click on view Basket button
   Then Verify "765-1197" Item has displayed in Basket Summary Page
   
 Scenario: 'Home Page To Basket Summary Page'
   Given I Open RS Home Page
   And Select "Batteries" Product 
   And Select "Rechargeable Batteries" Categorie 
   And Select "AA Rechargeable Batteries" SubCategorie 
   And Select "617-0773" Item 
   And Add Item To Basket
   When Click on view Basket button
   Then Verify "617-0773" Item has displayed in Basket Summary Page