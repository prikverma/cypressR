/// <reference types="Cypress"/>

describe("my first test suite", function () {
  it("satic/dynamic dropdown handle on page test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // 1) static dropdown handling
    cy.get("select").select("Option2");
    //2) dynamic dropdown handling

    cy.get("#autocomplete").type("Ind");
    cy.get(".ui-menu-item div").each(($el) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
  });
});
