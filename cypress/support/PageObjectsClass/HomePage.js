class HomePage {
  enterName = "input[name='name']:nth-child(2)";
  enterEmail = "input[name='email']";
  enterPassword = "#exampleInputPassword1";
  dropdownGender = "#exampleFormControlSelect1";
  enterDOB = "div.form-group:nth-child(8) > input.form-control";
  enterTwoWayBinding = ":nth-child(4) > .ng-pristine";
  checkboxEmployed = ".form-check.form-check-inline > #inlineRadio2"
  btnsubmit = "input.btn.btn-success"
  popupSuccessText = "div.alert.alert-success.alert-dismissible"
  btnshop = "li.nav-item:nth-child(2) > a.nav-link"

  getName() {
    return cy.get(this.enterName)
  }
  getEmail() {
    return cy.get(this.enterEmail)
  }
  getPassword() {
    return cy.get(this.enterPassword)
  }
  selectGender() {
    return cy.get(this.dropdownGender);
  }
  selectCheckbox() {
    return cy.get(this.checkboxEmployed)
  }
  selectDOB() {
    return cy.get(this.enterDOB);
  }
  getTwoWayBinding() {
    return cy.get(this.enterTwoWayBinding);
  }
  clickSubmit() {
    return cy.get(this.btnsubmit)
  }
  popupSuccessMessage() {
    return cy.get(this.popupSuccessText)
  }
  btnShop() {
    cy.get(this.btnshop).click()
  }
}
export default HomePage;
