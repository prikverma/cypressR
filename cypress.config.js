const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rdmt2h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}",
  },
});
