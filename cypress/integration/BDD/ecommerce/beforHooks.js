before("Get data stored from fixtures folder", function () {
    cy.fixture("example.json").then((data) => {
        this.data = data;
    });
})