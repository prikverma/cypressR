// Custom commands are used for resuing the code. we can customized commands in support/commands.js folder
/// <reference types="Cypress" />

describe(" Example for Cypress custom commands", function () {
  before("using data from example.json", function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  // this is an example for only 1 product if we would like to add multiple product we need to add custom commands so that we not need to write code again and again
  it("Basic example of using custom commands for reusing same code", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".navbar-nav li:nth-child(2)").click();
    // cy.get(".card-title").each(($el, index, $list) => {
    //   if ($el.text().includes("Nokia Edge")) {
    //     cy.get(".btn.btn-info").eq(index).click();
    // or we can use below custom command(created from above code ) and added in commands.js and called with the name of command
    cy.selectProduct("Blackberry");
  });
});
