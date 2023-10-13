/// <reference types="Cypress" />
//now we need reference of iframe autsuggestion after cy. we need to add reference of Iframe here
/// <reference types="cypress-iframe" />
// now we need to import cypress-iframe here
import "cypress-iframe";

describe("Iframe handling using cypress-iframe plugin suite", function () {
  it("iframe demo test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //now we need to give iframe document to cy.frameLoaded("id or any tag") using this cypress will have knowledge of this frame and load as a cypress object.
    cy.frameLoaded("#courses-iframe");
    // now we will tell cypress to switch to iframe mode cypress will check loaded iframe and perform all action we need to perform
    cy.iframe().find("li a[href*='mentor']").eq(0).click();
    //if we have a test case to put assertion on  how many mentorship types on the site
    cy.wait(50);
    cy.iframe().find("div h1[class*='pricing-title']").should("have.length", 2);
  });
});
