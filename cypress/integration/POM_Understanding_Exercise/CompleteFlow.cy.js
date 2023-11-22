/// <reference types="Cypress" />
import HomePage from "../../support/PageObjectsClass/HomePage.js";
import ShopPage from "../../support/PageObjectsClass/ShopPage.js";
import CheckoutPage from "../../support/PageObjectsClass/CheckoutPage.js";
import dropdownPage from "../../support/PageObjectsClass/dropdownPage.js";

describe("Spec Validation POM", function () {


  before("Get data stored from fixtures folder", function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  it("Validation for homepage", function () {
    // calling base url from env in cypress.config
    cy.visit(Cypress.env('url') + "/angularpractice/ ")

    const homePageData = new HomePage();
    // enter name in the box
    homePageData.getName().type(this.data.name);
    // validating two way binding data
    homePageData.getTwoWayBinding().should("have.value", this.data.name)
    // validate name accept min 2 character
    homePageData.getName().should("have.attr", 'minlength', '2')
    // enter email in the box
    homePageData.getEmail().type(this.data.email)
    // enter password in the box
    homePageData.getPassword().type(this.data.password)
    // Select Gender
    homePageData.selectGender().select(this.data.gender)
    // select check box (Employed)
    homePageData.selectCheckbox().click().should("be.checked")
    // Entering DOB simple way
    homePageData.selectDOB().type("1993-12-09")
    //Cick on submit button
    homePageData.clickSubmit().click()
    //validating Success! text message
    homePageData.popupSuccessMessage().contains("Success! The Form has been submitted successfully!.")
    //click on shop button now
    homePageData.btnShop();
    // Now validating Shop Page
    const shopPage = new ShopPage()

    // Now select 3 products and add to the cart I am using custom commands define in support/commands.js
    this.data.productName.forEach(el => {

      cy.selectProduct(el) // Custom command

    });
    shopPage.btnCheckout().click()
    // compare price with total validate

    var sum = 0;

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

    // click on checkout page


    const checkPage = new CheckoutPage()
    // click checkout on checkout pages
    checkPage.btnCheckout2()

    const dropPage = new dropdownPage()
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
  });

});
