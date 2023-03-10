const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "36r6tq",
  viewportWidth: 1200,
  screenshotOnRunFailure: true,
  videoUploadOnPasses: false,
  video: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 100000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
