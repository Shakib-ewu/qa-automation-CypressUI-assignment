const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,    // Retries when running via `cypress run`
    openMode: 1,   // Retries when running via `cypress open`
  },
  e2e: {
    baseUrl: "https://craftcellars.ca/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // Add any custom Node event listeners here
    },
  },
});
