/// <reference types="cypress"/>

describe("Mouse hover popup testsuite", function () {
  it("Mouse hover popup test", function () {
    // handling cross origin issue or child tab /window
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // does not support mouse hover but we will manupulate using jquery methods show() which can be invoke using invoke()
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    //cy.get(".mouse-hover-content a[href^='#t']").click();
    cy.url().should("include", "top");
  });
});
