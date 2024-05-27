const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true},
    
  e2e: {

    baseUrl: "https://rubinoshoes.com/"
    
  },
  

  // cypress/plugins/index.js
  
});