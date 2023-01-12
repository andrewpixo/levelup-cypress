import {defineConfig} from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},
        baseUrl: 'http://localhost:4200',
        video: true,
        videosFolder: 'cypress/videos',
        screenshotsFolder: 'cypress/screenshots',
        screenshotOnRunFailure: true,
        viewportHeight: 1080,
        viewportWidth: 1920,
    },
});
