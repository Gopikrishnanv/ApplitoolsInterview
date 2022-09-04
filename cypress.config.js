const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "Cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  videoUploadOnPasses: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 20000,
  requestTimeout: 30000,
  numTestsKeptInMemory: 5,
  responseTimeout: 120000,
  pageLoadTimeout: 100000,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "/tmp/artifacts/junit/cypress",
    reportFilename: "mochawesome.json",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: 'https://amazon.in',
    specPattern:'cypress/integration/amazon.js',
     setupNodeEvents(on, config) 
     {      
      // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
