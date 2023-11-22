Feature: End to End testing

    Regression

    Scenario: As A user I should be able purchase product
        Given I open Ecommerce Page
        When I add items to the cart
        And Validate sum of product's value
        Then select country and submit and validate Thankyou

    Scenario: Filling the form to shop
        When I fill the form details
        And validate forms behaviour
        Then select the Shop Page