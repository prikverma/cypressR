/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage.js";
import ShopPage from "../PageObjects/ShopPage.js";

describe("Spec Validation POM", function () {

  before("Get data stored from fixtures folder", function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  it("Validation for homepage", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")

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

      cy.selectProduct(el)

    });
    // click on checkout page
    shopPage.btnCheckout().click()
    cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
    // Validating dynamic dropdown
    cy.get("#country").type("In")
    cy.wait(5000)
    cy.get("div [class='suggestions'] >ul>li>a").each(($el) => {
      if ($el.text() === "India") {
        cy.wrap($el).click()
      }
    })
    cy.get("#checkbox2").check({ force: true })
    cy.get(" input.btn.btn-success.btn-lg").click()
    cy.contains(" Thank you! Your order will be delivered in next few weeks :-).")


  });




});
