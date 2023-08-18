const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://staging.lineup.ai',
        specPattern: 'cypress/e2e/**/*.feature', // Update the specPattern to match your feature file location
        defaultCommandTimeout: 35000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber({
                resolveStepDefinition(definition) {
                    return definition;
                },
                nonGlobalStepDefinitions: false,
                stepDefinitions: 'cypress/support/step_definitions',
            }));
        }
    }
});
