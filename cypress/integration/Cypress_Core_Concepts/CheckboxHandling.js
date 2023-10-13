/// <reference types="Cypress"/>

describe(" Checkbox suite", function () {
  it("Checkbox example 1", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption2")
      .check()
      .should("be.checked")
      .and("have.value", "option2"); // here we are adding .and to continue assertions
  });
});
