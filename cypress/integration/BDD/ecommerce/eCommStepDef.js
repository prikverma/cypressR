import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/PageObjectsClass/HomePage.js";
import ShopPage from "../../support/PageObjectsClass/ShopPage.js";
import CheckoutPage from "../../support/PageObjectsClass/CheckoutPage.js";
import dropdownPage from "../../support/PageObjectsClass/dropdownPage.js";

const homePageData = new HomePage()
const shopPage = new ShopPage()
const checkPage = new CheckoutPage()
const dropPage = new dropdownPage()

Given('I open Ecommerce Page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/ ")
})
// When I add items to the cart
When('I add items to the cart', () => {
    homePageData.btnShop();
    // Now validating Shop Page

    // Now select 3 products and add to the cart I am using custom commands define in support/commands.js
    this.data.productName.forEach(el => {

        cy.selectProduct(el) // Custom command

    });
    shopPage.btnCheckout().click()
})
// And Validate sum of product's value
And("Validate sum of product's value", () => {
    shopPage.productPrice().each((price) => {
        const priceText = price.text()
        var res = priceText.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {

        cy.log(sum)

    })

    shopPage.totalPrice().then(function (el) {
        var TotalPriceText = el.text()
        var actualTotalPrice = TotalPriceText.split(" ")
        actualTotalPrice = actualTotalPrice[1].trim()
        cy.log(actualTotalPrice)
        expect(Number(actualTotalPrice)).to.equal(sum)
    })

})
//I should be able to select country and purchase should be complete with Thankyou
Then('select country and submit and validate Thankyou', () => {
    checkPage.btnCheckout2()
    // Validating dynamic dropdown
    dropPage.getDropdown()
    cy.wait(3000)
    dropPage.getDropdownList()
    dropPage.getCheckbox().check({ force: true })
    // click on purchase button
    dropPage.btnPurchase().click()
    // there is extra spaces in this element so should('have.text',text) will not work
    // so  I used below chai accertion expect().to.be.true
    dropPage.popupSuccess().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

//When I fill the form details
When("I fill the form details", () => {
    homePageData.getName().type(this.data.name);
    homePageData.getEmail().type(this.data.email)
    homePageData.getPassword().type(this.data.password)
    homePageData.selectGender().select(this.data.gender)
    homePageData.selectDOB().type("1993-12-09")
})
// Then validate forms behaviour
And("Then validate forms behaviour", () => {
    homePageData.getTwoWayBinding().should("have.value", this.data.name)
    homePageData.getName().should("have.attr", 'minlength', '2')
    homePageData.selectCheckbox().click().should("be.checked")
    homePageData.popupSuccessMessage().contains("Success! The Form has been submitted successfully!.")

})
// And select the Shop Page
Then("select the Shop Page", () => {
    homePageData.clickSubmit().click()
})



