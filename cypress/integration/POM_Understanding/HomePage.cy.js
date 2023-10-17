/// <reference types="Cypress" />
import { Homepage } from "../PageObjects/Homepage.js";
describe("Spec Validation POM", function () {
  before("Get data stored from fixtures folder", function () {
    cy.fixture("example.json").then((data) => {
      this.data = data;
    });
  });

  it("Validation Test Script", function () {
    const homePageData = new Homepage();
    homePageData.getName(this.data.name);
  });
});
