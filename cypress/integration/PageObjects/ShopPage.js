class ShopPage {
    productTitle = " h4.card-title"
    addToCart = "button.btn.btn-info"
    checkout = "a.nav-link.btn.btn-primary"

    getProduct() {

        return cy.get(this.productTitle)
    }
    btnAddToCart() {
        return cy.get(this.addToCart)
    }
    btnCheckout() {
        return cy.get(this.checkout)
    }

}
export default ShopPage;