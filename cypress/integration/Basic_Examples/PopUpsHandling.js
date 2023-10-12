/// <reference types="Cypress"/>

describe(" Checkbox suite", function () {
  it("Checkbox example 1", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cypress auto accepts alerts and popups by( window:alert  app event ) use cy.on to triger any event for manually
    cy.get("[value='Alert']").click();
    cy.get("[value='Confirm']").click();
    // for manually manipulate
    //compairing Alert message on popup
    // below code is for handling alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    // // below code is for handling window event confirm
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
