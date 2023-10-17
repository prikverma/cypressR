class HomePage {
  enterName = "input[name='name']:nth-child(2)";
  enterEmail = "input[name='email']";
  enterPassword = "#exampleInputPassword1";
  selectGender = "exampleFormControlSelect1";
  enterDOB = "div.form-group:nth-child(8) > input.form-control";
  enterTwoWayBinding = "ng-pristine.ng-valid.ng-touched";

  getName(name) {
    cy.get(this.enterName).type(name);
  }
  getEmail(email) {
    cy.get(this.enterEmail).type(email);
  }
  getPassword(password) {
    cy.get(this.enterPassword).type(password);
  }
  getGender() {
    return cy.get(this.selectGender);
  }

  selectDOB() {
    return cy.get(this.enterDOB);
  }

  getTwoWayBinding() {
    return cy.get(this.enterTwoWayBinding);
  }
}
export default HomePage;
