/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage.js";

describe("Spec Validation POM", function () {
  before("Get data stored from fixtures folder", function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  it("Validation Test Script", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    const homePageData = new HomePage();
    homePageData.getName(this.data.name);
  });
});
