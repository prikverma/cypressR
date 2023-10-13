/// <reference types= "Cypress" />

describe(" WebTable Suite", function () {
  it("Webtable test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(".table-display td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        // moving to next sibiling using .next() method
        cy.get(".table-display td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const pricetext = price.text();
            expect(pricetext).to.equal("25");
          });
      }
    });
  });
});
