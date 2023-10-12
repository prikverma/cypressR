/// <reference types="Cypress"/>

describe("my first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").click().type("ca");

    // Requirement : Need to select a particular element's text and add that into cart eg ; cashew & capsicum
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const productText = $el.find("h4.product-name").text();

        if (productText.includes("Cashews")) {
          cy.wrap($el.find("button")).click();
        }
        if (productText.includes("Capsicum")) {
          cy.wrap($el.find("button")).click();
        }
      });
    //
    cy.get("img[alt='Cart']").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();

    // Handling country static dropdown
    cy.get("select").select("India");
    cy.get("input[type='checkbox']").check().should("be.checked");
    cy.contains("Proceed").click();
    cy.contains("Thank you, your order");
  });
});
