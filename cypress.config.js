const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rdmt2h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // resolve: {
    //   extensions: [".js", ".jsx", ".ts", ".tsx"],
    // },

    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
  },
});
