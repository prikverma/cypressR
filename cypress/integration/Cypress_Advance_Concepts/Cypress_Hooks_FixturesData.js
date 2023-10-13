//Here we are using hooks for using data which is in fixtures folder. just basic example
/// <reference types="Cypress" />

describe("Hooks examples with fixtures folder data", function () {
  // using hook to get stored data stored in fixtures folder file
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
  it("Fixture's file data use using Hooks", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    cy.get("select[class='form-control']").select(this.data.gender);
    cy.get("input[name='name']:nth-child(1)").should(
      "have.value",
      this.data.name
    ); // 2 way data binding with elements assertions
    // if we want to validate eg below this element's attribute accept minimum value 2  we use below command
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      "2"
    );
  });
});
