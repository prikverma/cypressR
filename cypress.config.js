const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor")

const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
// this setupNodeEvents is use so that all the plugins installed should register before running scripts
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "rdmt2h",
  env: {
    url: "https://rahulshettyacademy.com"

  },
  e2e: {
    // resolve: {
    //   extensions: [".js", ".jsx", ".ts", ".tsx"],
    // },
    // specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    specPattern: "cypress/integration/BDD/**/*.feature",
    setupNodeEvents,
  },
});
