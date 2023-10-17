/// <reference types="Cypress"/>

describe("Parameterizing Test Data", function () {
  before(
    "Getting data from fixture's file using cy.fixture() and resolving promise and adding this. so that data can be accessed globally",
    function () {
      cy.fixture("example").then(function (data) {
        // here we are using cy.fixture method and giving file name to it cypress knows the path of it automatically
        // now we have access to the file we need to resolve promise using .then and we will use this.data so that data can be accessed globally.
        this.data = data;
      });
    }
  );
  it("Parameterizing_Test_Data_From_json_file", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".navbar-nav li:nth-child(2)").click();
    // Requirment: Need to select 2 items or more and add to the cart and checkout we use costom command code here and use parametirized data from fixtures file.
    // productName // we have used foreach here
    this.data.productName.forEach(($el) => {
      cy.selectProduct($el); // this is a custom command in commands.js
    });
    cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();
    cy.get("button.btn.btn-success").click();
  });
});
