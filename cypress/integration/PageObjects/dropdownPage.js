class dropdownPage {

    getDropdown() {
        cy.get("#country").type("In")
    }
    getDropdownList() {
        cy.get("div [class='suggestions'] >ul>li>a").each(($el) => {
            if ($el.text() === "India") {
                cy.wrap($el).click()
            }
        })
    }

    getCheckbox() {
        return cy.get("#checkbox2")
    }
    btnPurchase() {
        return cy.get(" input.btn.btn-success.btn-lg")
    }

    popupSuccess() {
        return cy.contains("Thank you! Your order will be delivered in next few weeks :-).")

    }

}
export default dropdownPage;
