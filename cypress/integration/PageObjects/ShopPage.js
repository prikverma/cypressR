class ShopPage {
    productTitle = " h4.card-title"
    addToCart = "button.btn.btn-info"
    checkout = "a.nav-link.btn.btn-primary"
    prodPrice = "tr td:nth-child(4) strong"
    totalPriceSum = "tr td:nth-child(5) h3 strong"

    getProduct() {

        return cy.get(this.productTitle)
    }
    btnAddToCart() {
        return cy.get(this.addToCart)
    }
    btnCheckout() {
        return cy.get(this.checkout)
    }
    productPrice() {
        return cy.get(this.prodPrice)
    }
    totalPrice() {
        return cy.get(this.totalPriceSum)
    }

}
export default ShopPage;