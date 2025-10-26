import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      const allureWriter = require('@shelex/cypress-allure-plugin/writer');
      allureWriter(on, config);

      return config;
    },
    experimentalStudio:true,

    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: "cypress/support/e2e.ts"
  },
});
