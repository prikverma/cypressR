/// <reference types="cypress"/>

describe("Child window suite", function () {
  it("child/tab test", function () {
    // handling cross origin issue or child tab /window
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    // handling cross origin issue
    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get(
        "[id='navbarSupportedContent'] li a[href*='https://www.udemy.com/']"
      ).click();
    });
  });
});
